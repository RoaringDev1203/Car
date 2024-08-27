import React from "react";
import Icon from "./icons";

export const ScoreStar = ({ value, valueDisplay, size, fill }: { value: number, valueDisplay?: boolean, size: number, fill?: string }) => {
    return (
        <div className="d middle" style={{ gap: '0.3em' }}>
            {/* {value !== 0 && !!valueDisplay && <div style={{color: `${value > 4.5 ? 'var(--rb-success)' : (value > 2 ? 'var(--rb-warning)' : 'var(--rb-danger)')}`, fontWeight: '900', lineHeight: 1.6}}>{value}</div>} */}
            {value !== 0 && !!valueDisplay && <div style={{ lineHeight: 1, marginRight: '0.3em', fontSize: size }}>{value}</div>}
            {Array(Math.floor(value)).fill(0).map((i, k) => (
                <div key={k} style={{ color: fill || '#ffb503' }}>
                    <Icon icon="Star" size={size} />
                </div>
            ))}
            {Array(5 - Math.floor(value)).fill(0).map((i, k) => (
                <div key={k} style={{ color: '#ffb503' }}>
                    <Icon icon="OutlineStar" size={size} />
                </div>
            ))}
        </div>
    )
}