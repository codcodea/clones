// Toggle underline on the menu items
const toggleUnderline = (e) => {
    const underline = ['underline', 'underline-offset-[4px]', 'decoration-gray-400']

    const elem = document.querySelectorAll('.grab-underline')
    elem.forEach((item) => item.classList.remove(...underline))

    if (!e) return
    e.currentTarget.classList.add(...underline)
}

export { toggleUnderline }
