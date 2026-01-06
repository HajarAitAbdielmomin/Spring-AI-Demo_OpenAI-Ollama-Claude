import "./cardStyle.css";

type Props = {
    title: string;
    subtitle: string;
    response?: string;
    status?: "pending" | "done" | "error";
    duration?: number;
    tokens?: number;
};

export default function ChatCard({
                                              title,
                                              subtitle,
                                              response,
                                              status,
                                              duration,
                                              tokens
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
                <span>⏱ {duration ? `${duration} ms` : "--"}</span>
                <span>📦 {tokens ?? "--"} tokens</span>
            </div>

        </div>
    );
}
