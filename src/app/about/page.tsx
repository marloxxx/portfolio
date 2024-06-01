'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeIn } from '@/animation/framer'
import ABOUT_IMG from '@/assets/me/about-image.webp'
import PageWrapper from '@/common/page-wrapper'
import { ABOUT, ABOUT_HEADER } from '@/constants/about'
import { CURRENT_STATUS } from '@/constants/others'
import { gradients } from '@/lib/card-hover-gradients'
import AnimatedBorderCard from '@/ui/animated-border-card'
import Button from '@/ui/button'
import Card from '@/ui/card'
import IconList from '@/ui/icon-list'
import PageHeading from '@/ui/page-heading'

const About = () => {
  return (
    <PageWrapper>
      <PageHeading header={ABOUT_HEADER} />

      <div className="mb-6 flex w-full flex-col items-center gap-3">
        <AnimatedBorderCard wrapperClassName="aspect-square min-w-[280px] max-w-[325px]">
          <Image
            priority
            alt="Horas Marolop Amsal Siregar"
            className="object-cover"
            height={450}
            src={ABOUT_IMG}
            width={450}
          />
        </AnimatedBorderCard>
        <motion.p
          className="mb-4 text-center font-medium"
          variants={fadeIn('down', 'tween', 50, 0.25, 0.25)}
        >
          {CURRENT_STATUS}
        </motion.p>
        <Button className="px-2" icon="bx-paper-plane" link="/contact">
          Say Hi!
        </Button>
      </div>

      {ABOUT?.map((about, i) => (
        <Card
          key={about.type}
          hoverGradient={gradients[i]}
          title={about.type}
          titleClassName="capitalize"
        >
          <IconList animation boxIcon="bx-analyse" data={about.description} />
        </Card>
      ))}
    </PageWrapper>
  )
}

export default About
