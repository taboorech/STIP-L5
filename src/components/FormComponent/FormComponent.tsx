const FormComponent = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <form className="space-y-4">
        <label htmlFor="select" className="block text-lg font-medium text-gray-700">
          Choose an option:
        </label>
        <select
          id="select"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">--Select--</option>
          <option value="show">Show Input Field</option>
          <option value="hide">Hide Input Field</option>
        </select>

        <div id="extra-input">
          <label htmlFor="extra-input-field" className="block text-sm font-medium text-gray-700">
            Extra Input:
          </label>
          <input
            id="extra-input-field"
            type="text"
            placeholder="Type something"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;