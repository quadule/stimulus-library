import {Controller} from "stimulus";

export function logProperty(prop: string): boolean {
  switch (prop) {
    case "application":
    case "el":
    case "element":
    case "constructor":
    case "initialize":
    case "log":
    case "logEvent":
    case "dispatch":
    case "data":
    case "valueDescriptorMap":
    case "mutate":
    case "identifier":
      return false;
  }

  if (/^_.*?$/.test(prop)) {
    return false;
  }
  if (/^.*?Target(s)?$/.test(prop)) {
    return false;
  }
  if (/^.*?Value$/.test(prop)) {
    return false;
  }
  if (/^.*?ValueChanged$/.test(prop)) {
    return false;
  }
  if (/^.*?Class$/.test(prop)) {
    return false;
  }
  if (/^.*?Classes$/.test(prop)) {
    return false;
  }
  if (/^.*?ClassesPresent$/.test(prop)) {
    return false;
  }

  return true;
}


export function log(controller: Controller, functionName: string, args: {} = {}): void {
  if (!controller.application.debug) {
    return;
  }
  let logger = console;
  logger.groupCollapsed(...colorize(controller.identifier, "#3B82F6"), `#${functionName}`);
  logger.log({
    element: controller.element,
    controller: controller,
    ...args,
  });
  logger.groupEnd();
}

export function warn(controller: Controller, warning: string, args: {} = {}): void {
  if (!controller.application.debug) {
    return;
  }
  let logger = console;
  logger.groupCollapsed(...colorize(controller.identifier, "#F39B1AFF"), `!! ${warning} !!`);
  logger.warn({
    element: controller.element,
    controller: controller,
    ...args,
  });
  logger.groupEnd();
}

export function logEvent(controller: Controller, eventName: string, event: CustomEvent, element: HTMLElement) {
  if (!controller.application.debug) {
    return;
  }
  let logger = console;
  logger.groupCollapsed(
    ...colorizeMany([
      {text: controller.identifier, color: "#3B82F6"},
      {text: eventName, color: "#0be000"},
    ]),
    event.detail,
  );
  logger.log({element});
  logger.groupEnd();
}

interface ColorMapping {
  text: string;
  color: string;
}

function colorize(text: string, color: string): string[] {
  return colorizeMany([{text, color}]);
}

function colorizeMany(texts: ColorMapping[]): string[] {
  let str = "";
  let colors = texts.flatMap(x => {
    str += `%c${x.text}%c `;
    return [`color: ${x.color}`, "color: unset"];
  });

  return [str, ...colors];
}
