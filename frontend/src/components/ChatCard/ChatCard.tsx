import "./cardStyle.css";

type Props = {
    title: string;
    subtitle: string;
    response?: string;
    loading?: boolean;
    error?: string;
    duration?: number;
    tokens?: number;
};

export default function ChatCard({
                                              title,
                                              subtitle,
                                              response,
                                              duration,
                                              tokens,
                                              loading,
                                              error
                                          }: Props) {
    return (
        <div className="model-card">
            <div className="model-card-header">{title.toUpperCase()}</div>

            <div className="model-card-body">
                <h3>{subtitle}</h3>

                <div className="response-box">
                    {loading && <span className="thinking">Thinking...</span>}

                    {error && <span className="error">Connection failed</span>}

                    {!loading && !error && response}

                </div>
            </div>

            <div className="model-card-footer">
                <span>⏱ {duration ? `${duration} ms` : "--"}</span>
                <span>📦 {tokens ?? "--"} tokens</span>
            </div>

        </div>
    );
}
