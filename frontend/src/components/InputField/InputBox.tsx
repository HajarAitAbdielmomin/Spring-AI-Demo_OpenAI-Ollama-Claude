import "./inputStyle.css";

type Props = {
    value: string;
    onChange: (v: string) => void;
    onSubmit: () => void;
};

export default function InputBox({ value, onChange, onSubmit }: Props) {
    return (
        <div className="prompt-wrapper">
            <div className="prompt-header">

            </div>

            <div className="prompt-body">
                <input
                    placeholder="Send a prompt ..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />

                    <button className="send-btn" onClick={onSubmit}>
                        ↑
                    </button>
            </div>
        </div>
    )
}
