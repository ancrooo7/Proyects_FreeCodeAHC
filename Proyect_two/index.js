function addBorders(children) {
    if (children.length) {
      for (child of children) {
        child.setAttribute('style', 'border: 1px solid black;');
              addBorders(child.children);
      };
    }
  }