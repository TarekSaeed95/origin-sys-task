export const selectHandler = (target, setRowsSelected, rowsSelected, apiRef) => {
    if (target.length === 0) {
        setRowsSelected([]);
    }
    if (target.length < rowsSelected.length) {
        let removedItems = rowsSelected.filter((itm) => !target.includes(itm));
        removedItems.map((item) => {
            if (`${item}`.indexOf("auto-generated-row-") === 0) {
                // deselect group children
                let children = apiRef.current.getRowGroupChildren({ groupId: item });
                target = target.filter((item) => !children.includes(item));
            } else {
                // deselect parent if any child deselected
                if (apiRef.current.getRow(item)) {
                    let parent = apiRef.current.getRowNode(item).parent;
                    target = target.filter(
                        (row) =>
                            row !== parent
                    );
                }
            }
        });
    }
    // select users
    target.map((item) => {
        let children = apiRef.current.getRowGroupChildren({ groupId: item });
        let parent = apiRef.current.getRowNode(item).parent;
        // select children with parent click
        if (typeof item === "string") {
            target.push(...children);
        }
        // select parent if all children selected
        if (typeof item === "number") {
            let childrenOfGroup = apiRef.current.getRowGroupChildren({ groupId: parent });
            if (childrenOfGroup.every(child => target.includes(child))) {
                target.push(parent);
            }
        }
    });
    // delete repeted targets
    target = [...new Set(target)];
    setRowsSelected(target);
};
