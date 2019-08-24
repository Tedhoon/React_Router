import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => { //이거 꼭 match로 써줘야한다?
    
    const query = queryString.parse(location.search);
    console.log(query)
    const detail = query.detail === 'true';

    return(
        <div>
            <h1>About Page {match.params.name}</h1>
            {detail && 'detail: blahblah'}

            {/* ?detail=true 가 주소 뒤에 붙으면, ‘detail: blahblah’문자열이 나타난다! 참고로 url쿼리는 다 문자열! (변환가능) */}
        </div>
    )
}

export default About;