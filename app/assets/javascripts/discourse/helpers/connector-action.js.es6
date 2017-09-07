const {
  Helper,
  assert
} = Ember;

// This is similar to the `action` helper in Ember except we can use it
// against actions in our connector classes from plugin outlets
export default Helper.extend({
  compute([component, actionName, ...params]) {
    if (component && component.actionFor) {
      const func = component.actionFor(actionName);
      assert(`No action '${actionName}' found in connectorClass`, func);

      return () => func.apply(component, params);
    }
  }
});

