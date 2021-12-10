# Coding Styles
The following sections will outline coding styles to employ when editing various code files within this project.  By setting and following these guidelines, we can help to ensure that all code files remain consistant and clean in design.

The following coding styles can be found within this document:
1. [C# Coding Style](#c#-coding-style)
2. [HTML/CSHTML Coding Style](#html-cshtml-coding-style)


## C# Coding Style
These guidelines should be followed when creating and/or editing C# code files throughout this project.

1. Use [Allman style](http://en.wikipedia.org/wiki/Indent_style#Allman_style) braces. This means each brace begins on a new line.

2. Use four spaces of indention (not tabs).

3. **internal** and **private** field names should use `_cameCase` format  (e.g. `private string _foo;`).  **static** fields should be prefixed with `s_` (e.g. `public static string s_foo;`).

4. When `readonly` is used on a static field, it should come after the `static` declaration (e.g. `static readonly` not `readonly static`).

5. `public` fields and properties should use `PascalCasing`.  Public fields should be used sparingly, opting for public properties instead.

6. Use `PascalCasing` to name all `constant` local variables and fields.

7. Fields should be specified at the top within type declarations

8. Use `PascalCasing` for all method names, including local functions.

9. Visibility should always be specified, even if it's the default (e.g. `private string _foo` not `string _foo`).  Visibility should be the first modifier (e.g.`public abstract` not `abstract public`).

10. Avoid using `this.` unless absolutly neccessary.

11. Namespace imports should be specified at the top of the file *outside* of `namespace` declarations.  These should be sorted alphabetically, with the exception of `System.*` namespaces, which are to be placed on top of all others.

12. Avoid unneccessary free space.

13. Avoid using `var` unless absolutely neccessary.

14. Language keywords should be used instead of BCL types (e.g. `int, string, float` instead of `Int32, String, Single`, etc) for both type references as well as method calls (e.g. `int.Parse` instead of `Int32.Parse`).

15. Do not use single-line `if` statements. All `if` statements should include a body with opening and closing braces.

16. The contents of the LICENSE.md file should be included as a header for all C# files.


An [EditorConfig](https://editorconfig.org/) file (`.editorconfig`) has been provided at the root of the repository, enabling C# auto-formatting to confirm to the above guidelines.


## HTML/CSHTML Coding Style
These guidelines should be followed when creating and/or editing HTML/CSHTML code files throughout this project.

1. The Layout file used should always declare Document Type (e.g. `<!DOCTYPE html>`).

2. Use four spaces of indention (not tabs).

2. Close all HTML Elements, including empty elements such as the `meta` element.  (e.g. `<meta foo="bar" />` not `<meta foo="bar">`)

3. Use lowercase element names (e.g. `<body>` not `<BODY>`).

4. Use lowercase attribute names (e.g. `<a href="...">` not `<a HREF="...">`).

5. Always quote attribute values (e.g. `<div class="foo">` not `<div class=foo>`).

6. Images should always have `width` and `height` style values defined.  This is done to reduce flickering from browser reserving space space before loading image.

7. Images should always have an `alt` attribute value defined.

8. Do not put spaces before and/or after equal signs when assigning values to attributes (e.g. `<div class="foo">` not `<div class = "foo">`).

9. Avoid adding unneccessary blank lines.

10. All C# used within `.cshtml` files should following the guidelines found in the [C# Coding Style](#c#-coding-style) section above.
