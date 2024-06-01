import { BOXICONS } from '@/lib/box-icons'

export type TSocial = {
  source: string
  iconId: keyof typeof BOXICONS
  css: string
}

export const SOCIALS: TSocial[] = [
  {
    source: 'https://web.facebook.com/Marlosirega',
    iconId: 'facebook',
    css: 'border-[#0866FF] [&>*]:text-[#0866FF] dark:border-[#0866FF]'
  },
  {
    source: 'https://github.com/marloxxx',
    iconId: 'github',
    css: 'border-[#181717] [&>*]:text-[#181717] dark:border-white dark:[&>*]:text-white'
  },
  {
    source: 'mailto:amsalsiregar12@gmail.com',
    iconId: 'gmail',
    css: 'border-[#EA4335] [&>*]:text-[#EA4335] dark:border-[#EA4335]'
  },
  {
    source: 'https://www.instagram.com/horas_96/',
    iconId: 'instagram',
    css: 'border-[#E4405F] [&>*]:text-[#E4405F] dark:border-[#E4405F]'
  },
  {
    source: 'https://www.linkedin.com/in/horas-marolop-amsal-siregar/',
    iconId: 'linkedin',
    css: 'border-[#0A66C2] [&>*]:text-[#0A66C2] dark:border-[#0A66C2]'
  },
  {
    source: 'https://t.me/horasss/',
    iconId: 'telegram',
    css: 'border-[#1D9BF0] [&>*]:text-[#1D9BF0] dark:border-[#1D9BF0]'
  }
]
