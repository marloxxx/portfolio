import { BOXICONS } from '@/lib/box-icons'

export type TSocial = {
  source: string
  iconId: keyof typeof BOXICONS
  css: string
}

export const SOCIALS: TSocial[] = [
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
    source: 'https://www.linkedin.com/in/horas-marolop-amsal-siregar/',
    iconId: 'linkedin',
    css: 'border-[#0A66C2] [&>*]:text-[#0A66C2] dark:border-[#0A66C2]'
  },
  {
    source: 'https://wa.me/6282386143124',
    iconId: 'whatsapp',
    css: 'border-[#25D366] [&>*]:text-[#25D366] dark:border-[#25D366]'
  },
  {
    source: 'https://t.me/horasss/',
    iconId: 'telegram',
    css: 'border-[#1D9BF0] [&>*]:text-[#1D9BF0] dark:border-[#1D9BF0]'
  }
]
