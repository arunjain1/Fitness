import React from 'react';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { SelectedPage } from '../../CommonTypes/types';
import { motion } from 'framer-motion';
import HText from '../../Ui/HText';

type Props = {
    setSelectedPage : (value : SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
  return (
    <section id ="benefits"
     className='mx-auto min-h-full w-5/6 py-20'
    >
     <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
      <div>
        <HText>MORE THAN JUST GYM.</HText>
      </div>
     </motion.div>
    </section>
  )
}

export default Benefits