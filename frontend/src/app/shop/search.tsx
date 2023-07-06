export default function Search () {
  return (
    <div className="rounded bg-white flex gap-2 w-[722px]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.66683 13.9999C11.1646 13.9999 14.0002 11.1644 14.0002 7.66659C14.0002 4.16878 11.1646 1.33325 7.66683 1.33325C4.16903 1.33325 1.3335 4.16878 1.3335 7.66659C1.3335 11.1644 4.16903 13.9999 7.66683 13.9999Z" stroke="#273040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6668 14.6666L13.3335 13.3333" stroke="#273040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <input type="text" className="border-0 bg-white text-[#667085] text-sm" />
    </div>
  )
}