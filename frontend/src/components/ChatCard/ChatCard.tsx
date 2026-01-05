import "./cardStyle.css";

type Props = {
    title: string;
    subtitle: string;
    response?: string;
    status?: "pending" | "done" | "error";
};

export default function ChatCard({
                                              title,
                                              subtitle,
                                              response,
                                              status
                                          }: Props) {
    return (
        <div className="model-card">
            <div className="model-card-header">{title.toUpperCase()}</div>

            <div className="model-card-body">
                <h3>{subtitle}</h3>


                <span className={`status ${status}`}>{status}</span>

                <div className="response-box">
                    {response ?? "Waiting for response..."}
                </div>
            </div>

            <div className="model-card-footer">
                <span>⏱ 0.8s</span>
                <span>📦 Tokens: 120</span>

            </div>
        </div>
    );
}
