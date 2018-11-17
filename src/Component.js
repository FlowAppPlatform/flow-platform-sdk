/**
 * Documentation at /docs/classes/Component/README.md
 */

import Util from "./Util";
import Port from "./Port";
import Property from "./Property";

class Component {
  constructor(id) {
    // Icon URL is the URL of an Icon in SVG that can be showed in the UI.
    this._iconUrl = "";
    this._type = "component";

    // These are number of outports.
    this._ports = [];

    // A short description of the component.
    this._description = "";

    // A socket object to communicate with other components.
    this._socket = null;

    // Genere a new ID for this instance.
    this._id = id || Util.generateId();

    this._task = null;

    this._propertys = [];

    // check if the env is NodeJS
    this._platform = "browser";
    if (
      typeof process !== "undefined" &&
      process.versions &&
      process.versions.node
    ) {
      this._platform = "node";
    }

    this._isProcessingTask = false;

    // The execution platform
    this._executionPlatform = [];
  }

  isOnGraph() {
    // The Socket belongs to a Graph. If this component has a socket. It's on the graph.
    if (this._socket) {
      return true;
    } else {
      return false;
    }
  }

  initProperties(properties) {
    for (var key in properties) {
      if (this.hasProperty(key)) this.getProperty(key).data = properties[key];
    }
  }

  initConnections(connections) {
    for (var i = 0; i < connections.length; i++) {
      this.getPort(connections[i].fromPortId).connectComponentById(
        connections[i].toComponentId
      );
    }
  }

  addProperties(properties) {
    if (properties instanceof Property) {
      this.addProperty(properties);
    } else if (properties instanceof Array) {
      for (let i = 0; i < properties.length; i++) {
        this.addProperty(properties[i]);
      }
    } else {
      throw new Error("propertys should be an instance of Property class.");
    }
  }

  addProperty(property) {
    if (property instanceof Property) {
      if (!property.id) {
        throw new Error("Property does not have an ID.");
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (
          property.name === this._propertys[i].name ||
          property.id === this._propertys[i].id
        ) {
          throw new Error("Property with the same name or id already exists.");
        }
      }

      this._propertys.push(property);
    } else {
      throw new Error("propertys should be an instance of Property class.");
    }
  }

  removeProperty(property) {
    if (property instanceof Property || typeof property === "string") {
      if (property instanceof Property && !property.id) {
        throw new Error("Property does not have an ID.");
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (typeof property === "string") {
          if (property === this._propertys[i].name) {
            this._propertys.splice(i, 1);
          }
        } else {
          if (
            property.name === this._propertys[i].name ||
            property.id === this._propertys[i].id
          ) {
            this._propertys.splice(i, 1);
          }
        }
      }
    } else {
      throw new Error("propertys should be an instance of Property class.");
    }
  }

  updateProperty(property) {
    if (property instanceof Property) {
      if (!property.id) {
        throw new Error("Property does not have an ID.");
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (
          property.name === this._propertys[i].name ||
          property.id === this._propertys[i].id
        ) {
          this._propertys[i] = property;
          return;
        }
      }

      throw new Error("Property not found and is not updated.");
    } else {
      throw new Error("propertys should be an instance of Property class.");
    }
  }

  getProperty(property) {
    if (property instanceof Property || typeof property === "string") {
      if (property instanceof Property && !property.id) {
        throw new Error("Property does not have an ID.");
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (typeof property === "string") {
          if (property === this._propertys[i].name) {
            return this._propertys[i];
          }
        } else {
          if (
            property.name === this._propertys[i].name ||
            property.id === this._propertys[i].id
          ) {
            return this._propertys[i];
          }
        }
      }

      throw new Error("Property not found.");
    } else {
      throw new Error("Property should be an instance of property class.");
    }
  }

  hasProperty(property) {
    if (property instanceof Property || typeof property === "string") {
      if (property instanceof Property && !property.id) {
        throw new Error("Property does not have an ID.");
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (typeof property === "string") {
          if (property === this._propertys[i].name) {
            return true;
          }
        } else {
          if (
            property.name === this._propertys[i].name ||
            property.id === this._propertys[i].id
          ) {
            return true;
          }
        }
      }
      return false;
    } else {
      throw new Error("propertys should be an instance of Property class.");
    }
  }

  // execute the component task.
  execute() {
    var component = this;

    if (
      arguments[0] &&
      arguments[0]._type &&
      arguments[0]._type === "component"
    ) {
      component = arguments[0];
    }

    if (!component._task) {
      throw new Error("No task attached.");
    }
    // check if task is attached and if its actually a function.
    if (component._isProcessingTask) {
      throw new Error("Component is already processing a task.");
    }

    if (component._task && Util.validateType(component._task, "function")) {
      component._isProcessingTask = true;
      component._socket.emit(`resolve-properties-${component.id}`);
      component._task();
    }
  }

  taskComplete() {
    // Task is complete, and this component is no longer processing.
    this._isProcessingTask = false;
  }
  // Task is a custom code as a function that runs when the component executes.
  attachTask(task) {
    if (!Util.validateType(task, "function")) {
      throw new Error("Task must be a function.");
    }

    this._task = task;
  }

  // Task is a custom code as a function that runs when the component executes.
  detachTask() {
    this._task = null;
  }

  addPort(port) {
    if (port instanceof Port) {
      if (!port.id) {
        throw new Error("Port does not have an ID.");
      }

      for (let i = 0; i < this._ports.length; i++) {
        if (
          port.name === this._ports[i].name ||
          port.id === this._ports[i].id
        ) {
          throw new Error("Port with the same name or id already exists.");
        }
      }

      if (port._componentAttachedTo) {
        throw new Error("This port is already attached with other component");
      }

      port._componentAttachedTo = this;

      this._ports.push(port);
    } else {
      throw new Error("Port should be an instance of Port class.");
    }
  }

  removePort(port) {
    if (port instanceof Port) {
      if (!port.id) {
        throw new Error("Port does not have an ID.");
      }
      if (this._ports.indexOf(port) < 0) {
        throw new Error("Port not found in the component.");
      }
      this._ports.splice(this._ports.indexOf(port), 1);
      port._componentAttachedTo = null;
    } else {
      throw new Error("Port should be an instance of Port class.");
    }
  }

  getPort(port) {
    if (port instanceof Port || typeof port === "string") {
      if (port instanceof Port) {
        if (!port.id) {
          throw new Error("Port does not have an ID.");
        }

        if (this._ports.indexOf(port) < 0) {
          throw new Error("Port not found in the component.");
        }

        return this._ports[this._ports.indexOf(port)];
      }

      if (typeof port === "string") {
        for (var i = 0; i < this._ports.length; i++) {
          if (this._ports[i].name === port) {
            return this._ports[i];
          }
        }

        throw new Error(
          "Port with name " + port + ` not found in the component ${this.id}`
        );
      }
    } else {
      throw new Error("Port should be an instance of Port class.");
    }
  }

  hasPort(port) {
    if (port instanceof Port) {
      if (!port.id) {
        throw new Error("Port does not have an ID.");
      }
      if (this._ports.indexOf(port) < 0) {
        return false;
      }

      return true;
    } else {
      throw new Error("Port should be an instance of Port class.");
    }
  }

  getPorts() {
    return this._ports;
  }

  // Private Functions.

  _attachSocket(socket) {
    this._socket = socket;
    var component = this;
    this._socket.on("execute-component-" + this.id, function() {
      component.execute(component);
    });
  }

  _detachSocket() {
    if (this._socket) {
      this._socket.off("execute-component-" + this.id, this.execute);
      this._socket = null;
    }
  }

  setExecutionPlatform(platform) {
    if (Array.isArray(platform)) {
      if (platform.length > 2) {
        throw new Error("Too many elements in the array");
      }

      platform.forEach(arg => {
        if (arg !== "server" && arg !== "client") {
          throw new Error("Invalid argument");
        }
      });
      this._executionPlatform = platform;
    } else {
      if (typeof platform !== "string") {
        throw new Error("Platform should be a string");
      }

      if (platform !== "server" && platform !== "client") {
        throw new Error("Invalid string");
      }

      this._executionPlatform = [platform];
    }
  }

  // getters and setters
  get description() {
    return this._description;
  }

  set description(description) {
    if (!Util.validateType(description, "string")) {
      throw new Error("Description must be a string.");
    }

    this._description = description;
  }

  get task() {
    return this._task;
  }

  set task(task) {
    this.attachTask(task);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (!Util.validateType(name, "string")) {
      throw new Error("Name must be a string.");
    }
    this._name = name;
  }

  get iconUrl() {
    return this._iconUrl;
  }

  set iconUrl(iconUrl) {
    if (!Util.validateType(iconUrl, "url")) {
      throw new Error("iconUrl must be a URL.");
    }
    this._iconUrl = iconUrl;
  }

  get ports() {
    return this._ports;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    throw new Error("ID is read-only");
  }
}

// export.
module.exports = Component;
