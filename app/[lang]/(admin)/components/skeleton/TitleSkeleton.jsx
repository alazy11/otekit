
const TitleSkeleton = ({ count }) => {
    let arr = Array(count).fill("");
  
    return (
      <div className="grid grid-cols-1 gap-3">
        {arr.map((ele, index) => {
          return (
            <div
              role="status"
              key={index}
            //   className="animate-pulse flex items-center gap-2 py-[8px] px-5"
              className="animate-pulse flex items-center gap-2"
            >
              <div className="flex items-center justify-center w-[250px] h-[30px] bg-gray-300 rounded"></div>
              {/* <div className="w-full h-full flex flex-col justify-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-[80%] mb-4"></div>
                <div className="h-2.5 bg-gray-300 rounded-full w-[50%]"></div>
              </div> */}
              <span className="sr-only">Loading...</span>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default TitleSkeleton;
  