
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../CommonTypes/types.ts';

type Props = {
    page : string;
    selectedPage : SelectedPage;
    setSelectedPage : (value : SelectedPage)=> void;
}

function Link({page,selectedPage,setSelectedPage} : Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
     href={`#${lowerCasePage}`}
     className={`${selectedPage === lowerCasePage ?"text-primary-500":""} transiton duration-500 hover:text-primary-300`}
     onClick={()=>{
        setSelectedPage(lowerCasePage);
     }}
    >
        {page}
    </AnchorLink>
  )
}

export default Link