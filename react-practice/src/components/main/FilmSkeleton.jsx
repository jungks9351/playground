import React, { useMemo } from 'react';
import ContentLoader from 'react-content-loader';

const FilmSkeleton = () => {
  const style = useMemo(
    () => ({
      boxShadow: '1px 5px 15px 1px rgba(0,0,0,0.2)',
    }),
    [],
  );

  return (
    <>
      {new Array(9).fill(1).map((_, index) => {
        return (
          <ContentLoader
            key={index}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            style={style}
          >
            <rect x="0" y="0" rx="4" ry="4" width="400" height="300" />
            <rect x="125" y="320" rx="0" ry="0" width="150" height="20" />
            <rect x="165" y="350" rx="0" ry="0" width="70" height="20" />
          </ContentLoader>
        );
      })}
    </>
  );
};

export default FilmSkeleton;
