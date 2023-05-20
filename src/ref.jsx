const Ref = () => {
  return (
    <div className="container mx-auto p-8 bg-teal-800 border border-red-700">
      <h1 className="text-4xl text-indigo-950 font-bold mb-4">Heading 1</h1>
      <h2 className="text-3xl text-emerald-950 font-bold mb-4">Heading 2</h2>
      <h3 className="text-2xl text-violet-700 font-bold mb-4">Heading 3</h3>
      <h4 className="text-xl  bg-violet-950 font-bold mb-4">Heading 4</h4>
      <h5 className="text-lg font-bold mb-4">Heading 5</h5>
      <h6 className="text-base font-bold mb-4">Heading 6</h6>

      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <p className="text-lg">This is a regular paragraph.</p>
        <p className="text-red-500 font-bold">This paragraph has a red text color.</p>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-1/2 bg-blue-500 p-4">
          <p className="text-white">Left column</p>
        </div>
        <div className="w-1/2 bg-green-500 p-4">
          <p className="text-white">Right column</p>
        </div>
      </div>

      <article className="p-4 border border-gray-400 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Article Title</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet convallis velit.
          Vestibulum posuere mi quis leo posuere tempus.
        </p>
      </article>

      <p className="text-lg font-bold italic">This paragraph has a bold and italic text style.</p>

      <p className="text-2xl">This paragraph has a larger font size.</p>
    </div>
  );
};

export default Ref;
