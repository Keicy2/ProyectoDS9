import React from 'react';


const ActivitySummary = () => {
  return (
  <div class="card-deck">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Clientes</h5>
        <p class="card-text">99</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total de Ventas</h5>
        <p class="card-text">250$.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Otro</h5>

      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  );
};

export default ActivitySummary;