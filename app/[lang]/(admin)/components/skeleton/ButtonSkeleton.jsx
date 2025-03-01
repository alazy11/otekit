

const ButtonSkeleton = ({ count }) => {
    let arr = Array(count).fill("");
  
    return (
      <div className="grid grid-cols-1 gap-3">
        {arr.map((ele, index) => {
          return (
            <div
              role="status"
              key={index}
              className="animate-pulse flex items-center gap-2"
            >
              <div className="flex items-center justify-center w-[50px] h-[30px] bg-gray-300 rounded"></div>
              <span className="sr-only">Loading...</span>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ButtonSkeleton;
  