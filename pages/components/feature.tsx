export default function Feature() {
  return (
    <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-center">
          {`Here's a title`} <br className="hidden md:block" />
          {`that's really cool and good.`}
        </h2>
        <p className="text-base text-white text-opacity-30 md:text-lg">
          {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.`}
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-300 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-offBlack-700 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-white leading-5">
            {`Lorem ipsum dolor sit amet.`}
          </h6>
          <p className="max-w-md mb-3 text-sm text-white text-opacity-60 sm:mx-auto">
            {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem id at fugit provident aperiam amet.`}
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-300 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-offBlack-700 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-white leading-5">
            {"Lorem ipsum dolor sit."}
          </h6>
          <p className="max-w-md mb-3 text-sm text-white opacity-60 sm:mx-auto">
            {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quo consequatur, eum modi officiis perspiciatis.`}
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-300 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-offBlack-700 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-white leading-5">{`Lorem ipsum dolor sit amet consectetur.`}</h6>
          <p className="max-w-md mb-3 text-sm text-white text-opacity-60 sm:mx-auto">
            {`Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad`}
          </p>
        </div>
      </div>
    </div>
  );
}
