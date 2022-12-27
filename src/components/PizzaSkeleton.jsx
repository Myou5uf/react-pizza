import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={288}
            height={468}
            viewBox="0 0 288 468"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="139" cy="132" r="120" />
            <rect x="0" y="271" rx="10" ry="10" width="280" height="24" />
            <rect x="0" y="317" rx="10" ry="10" width="280" height="85" />
            <rect x="0" y="426" rx="10" ry="10" width="89" height="27" />
            <rect x="123" y="418" rx="30" ry="30" width="155" height="40" />
        </ContentLoader>
    );
};

export default PizzaSkeleton;
