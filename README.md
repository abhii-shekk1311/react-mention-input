# react-mention-input
## A customizable React input component that supports tagging/mentioning users using **@**.


## Features

- Easily mention users with **@**
- Keyboard navigation for mentions
- Fully customizable dropdown


## Getting started
Install the react-mention-input package via npm:

`npm install react-mention-input --save`

Or yarn:

`yarn add react-mention-input`

To use the package you will need to import the main input component and the types declaration from it:

```
import {ReactMentionInput} from "react-mention-input";
import type { IUsers } from "react-mention-input/types";
```

### Example Implementation:

```
import { useState } from "react";
import {ReactMentionInput} from "react-mention-input"
import type { IUsers } from "react-mention-input/types";

function App() {
  const [value, setValue] = useState<string>("");

  const handleChange = (value: string, mentions: IUsers[]) => {
    setValue(value);
    console.log({value}, mentions);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <ReactMentionInput users={users} value={value} onChange={handleChange} />
    </div>
  )
}

export default App
```

## Props Support

| Prop Name        | Type                                                | Required | Default   | Description                                                                 |
|------------------|-----------------------------------------------------|----------|-----------|-----------------------------------------------------------------------------|
| value          | string                                            |    Yes       | ""         | The current value of the input field.                                       |
| onChange       | (value: string, mentions: IUsers[]) => {}               |    Yes       | -         | The callback triggered when the input value changes.                           |
| users    | Array<IUsers[]>                                         |    Yes       | []      | List of users available for mention.                                 |
| placeholder    | string                                            |    No       | Enter @ to mention | Placeholder text for the input field.                              |
| name       | string                                                |    No       | mention-input   | As a form field name attribute need to be passed.                                    |
| rows | number                                                      |    No       | 1 | Number of rows for the textarea field                    |
| textareaRef        | react ref                                     |    No       | undefined     | A react ref to point the inner textarea.                                 |
| classNames      | JavaScript Object                                |    No       | {}      | This object accepts different keys to attach classnames to corresponding elements.                                    |

#### classNames Object Explanation
1. **What it takes?**
```
{
    mainContainerClass: string,
    containerClass: string,
    inputClass: string,
    listContainerClass: string,
    listClass: string,
    listItemClass: string,
}
```
2. **What these keys point to?**
- ***mainContainerClass***: Points to the main wrapper container of the whole package.
- ***containerClass***: Refers to the first child of the main container.
- ***inputClass***: Add the given classes to the textarea used for input.
- ***listContainerClass***: Refers to the wrapper container of the users dropdown renderer.
- ***listClass***: Points to the *ul* tag that contains the list of users.
- ***listItemClass***: Refers to the *li* of the *ul*.