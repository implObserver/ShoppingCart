export const clickScanner = () => {
    let target: HTMLElement;
    const startScan = () => {
        document.addEventListener('mousedown', handler);
    }

    const stopScan = () => {
        document.removeEventListener('mousedown', handler);
    }

    const handler = (e) => {
        console.log(e.currentTarget)
        target = e.target as HTMLElement;
    }

    const getTarget = () => {
        return target;
    }

    return { startScan, stopScan, getTarget };
}