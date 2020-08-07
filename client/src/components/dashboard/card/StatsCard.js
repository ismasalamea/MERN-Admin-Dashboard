import React from 'react';
import { Card as AntCard } from 'antd';
import StatsCardStyled from './StatsCardStyled';
import { UserAddOutlined } from '@ant-design/icons';

function StatsCard({ loading, stats, color }) {
  console.log(color);
  return (
    <StatsCardStyled color={color}>
      <AntCard className="card-col" loading={loading}>
        <div className="col">
          <p className="card-text">{stats.name}</p>
          <h5 className="card-stats">{stats.stats}</h5>
        </div>
        <div className="col-auto">
          <UserAddOutlined />
        </div>
      </AntCard>
    </StatsCardStyled>
  );
}

export default StatsCard;