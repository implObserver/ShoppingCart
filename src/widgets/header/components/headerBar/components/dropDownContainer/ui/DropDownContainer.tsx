import { Dropdown } from "@/shared/ui/dropdown"

export const DropDownContainer = () => {
    return (
        <div>
            <Dropdown>
                <div className="settings" style={{
                    display: "grid",
                    height: '50vh',
                    backgroundColor: 'green',
                }}>
                </div>
            </Dropdown>
        </div>
    )
}