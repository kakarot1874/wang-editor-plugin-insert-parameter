import InsertParameter from "./InsertParameter"
import DeleteParameter from "./deleteParameter"

export const parameterInsertMenuConfig = {
  key: 'insertParameter',
  factory() {
    return new InsertParameter()
  }
}

export const parameterDeleteMenuConfig = {
  key: 'deleteParameter',
  factory() {
    return new DeleteParameter()
  }
}