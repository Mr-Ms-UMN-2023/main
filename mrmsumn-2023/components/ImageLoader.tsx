import React, { Suspense } from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

function ImageLoader({ width, height }: any) {
  console.log(width);
  console.log(height);
  return (
    <div id="imageloader">
      {/* <SkeletonTheme baseColor="#202020" highlightColor="#444"> */}
        <Skeleton duration={5} width={width} height={height} />
      {/* </SkeletonTheme> */}
    </div>
  );
}


// function ImageLoader(OriginalComponent: React.ComponentType<any>) {
//   const LazyComponent = React.lazy(() => OriginalComponent);

//   return (
//     <Suspense fallback={<SkeletonLoader />}>
//       <LazyComponent />
//     </Suspense>
//   );
// }

  export {ImageLoader as ImageLoader};