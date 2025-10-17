/**
 * 1. e.target.[name of the input field].value
 *
 * 2. Use form action and formData in the action handler. formData.get("name of the input field")
 *
 * 3. Controlled component.one per each field. use state on change of the field. useful for dynamically handled error.
 *
 * 4. Handle all controlled field in one state object.
 * const [formData, setFormData] = useState({
 * name: "",
 * password: "",
 * phone: "",
 * })
 *
 * 4. uncontrolled using useRef() hook from react.
 *
 */
