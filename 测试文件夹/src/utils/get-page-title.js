import defaultSettings from '@/settings'

const title = defaultSettings.title || '攻防演练系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
