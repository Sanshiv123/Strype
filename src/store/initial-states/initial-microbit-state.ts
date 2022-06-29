import {CaretPosition, EditorFrameObjects, RootContainerFrameDefinition, ImportsContainerDefinition, FuncDefContainerDefinition, MainFramesContainerDefinition, getFrameDefType, AllFrameTypesIdentifier} from "@/types/types";

const initialMicrobitState: EditorFrameObjects = {
    0: {
        id: 0,
        frameType : RootContainerFrameDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [-1, -2, -3],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { },
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    "-1": {
        id: -1,
        frameType : ImportsContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [1],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {},
        isCollapsed: false,
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    "-2": {
        id: -2,
        frameType : FuncDefContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: { },
        isCollapsed: false,
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    "-3": {
        id: -3,
        frameType : MainFramesContainerDefinition,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: 0,
        childrenIds: [2,3],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {},
        isCollapsed: false,
        caretVisibility: CaretPosition.body,
        multiDragPosition: "",
    },
    1: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.fromimport),
        id: 1,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -1,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "microbit", focused: false, error :"", shownLabel: true},
            1: {code :  "*", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    2: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.varassign),
        id: 2,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "myString", focused: false, error :"", shownLabel: true},
            1: {code :  "\"Hello micro:bit!\"", focused: false, error :"", shownLabel: true} },
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },
    3: {
        frameType: getFrameDefType(AllFrameTypesIdentifier.empty),
        id: 3,
        isDisabled: false,
        isSelected: false,
        isVisible: true,
        parentId: -3,
        childrenIds: [],
        jointParentId: 0,
        jointFrameIds: [],
        contentDict: {
            0: {code :  "display.scroll(myString)", focused: false, error :"", shownLabel: true},
        },
        caretVisibility: CaretPosition.none,
        multiDragPosition: "",
    },

};

export default initialMicrobitState;


