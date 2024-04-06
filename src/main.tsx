import React from 'react';
import ReactDOM from 'react-dom/client';
import { PatientMonitoringApp } from './PatientMonitoringApp.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PatientMonitoringApp />
    </React.StrictMode>
);
