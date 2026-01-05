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
                                              status = "pending"
                                          }: Props) {
    return (
        <div className="model-card">
            <div className="model-card-header">{title.toUpperCase()}</div>

            <div className="model-card-body">
                <h3>{title}</h3>
                <p>{subtitle}</p>

                <span className={`status ${status}`}>{status}</span>

                <div className="response-box">
                    {response ?? "Waiting for response..."}
                </div>
            </div>

            <div className="model-card-footer">
                <span>⏱ 0.8s</span>
            </div>
        </div>
    );
}
