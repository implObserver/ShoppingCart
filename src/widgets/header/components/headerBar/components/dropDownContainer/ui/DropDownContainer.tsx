import { Dropdown } from "@/shared/ui/dropdown"

export const DropDownContainer = () => {
    return (
        <div>
            <Dropdown>
                <div className="settings" style={{
                    display: "block",
                    height: '50vh',
                    backgroundColor: 'green',
                }}>
                </div>
            </Dropdown>
        </div>
    )
}