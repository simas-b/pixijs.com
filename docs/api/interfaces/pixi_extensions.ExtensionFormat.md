---
id: "pixi_extensions.ExtensionFormat"
title: "Interface: ExtensionFormat"
sidebar_label: "ExtensionFormat"
custom_edit_url: null
---

[@pixi/extensions](../modules/pixi_extensions.md).ExtensionFormat

Strict extension format that is used internally for registrations.

**`Memberof`**

PIXI

## Hierarchy

- [`ExtensionFormatLoose`](pixi_extensions.ExtensionFormatLoose.md)

  ↳ **`ExtensionFormat`**

## Properties

### name

• `Optional` **name**: `string`

Optional. Some plugins provide an API name/property, such as Renderer plugins

#### Inherited from

[ExtensionFormatLoose](pixi_extensions.ExtensionFormatLoose.md).[name](pixi_extensions.ExtensionFormatLoose.md#name)

#### Defined in

[pixijs/packages/extensions/src/index.ts:48](https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L48)

___

### priority

• `Optional` **priority**: `number`

Optional, used for sorting the plugins in a particular order

#### Inherited from

[ExtensionFormatLoose](pixi_extensions.ExtensionFormatLoose.md).[priority](pixi_extensions.ExtensionFormatLoose.md#priority)

#### Defined in

[pixijs/packages/extensions/src/index.ts:50](https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L50)

___

### ref

• **ref**: `any`

Reference to the plugin object/class

#### Inherited from

[ExtensionFormatLoose](pixi_extensions.ExtensionFormatLoose.md).[ref](pixi_extensions.ExtensionFormatLoose.md#ref)

#### Defined in

[pixijs/packages/extensions/src/index.ts:52](https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L52)

___

### type

• **type**: [`ExtensionType`](../enums/pixi_extensions.ExtensionType.md)[]

The extension type, always expressed as multiple, even if a single

#### Overrides

[ExtensionFormatLoose](pixi_extensions.ExtensionFormatLoose.md).[type](pixi_extensions.ExtensionFormatLoose.md#type)

#### Defined in

[pixijs/packages/extensions/src/index.ts:62](https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L62)