// IPDR Dashboard Application
class IPDRDashboard {
    constructor() {
        // Use the actual data provided
        this.data = {
            sessions: [
                {
                    "id": "S001",
                    "timestamp": "2025-08-28 14:23:15",
                    "a_party": "192.168.1.100",
                    "b_party": "203.45.67.89",
                    "type": "Data",
                    "duration": 1250,
                    "data_volume": "45.2 MB",
                    "status": "Completed",
                    "alert_level": "Normal",
                    "geographic_info": "Mumbai, IN -> Singapore, SG"
                },
                {
                    "id": "S002", 
                    "timestamp": "2025-08-28 15:45:22",
                    "a_party": "9876543210",
                    "b_party": "9123456789",
                    "type": "Voice",
                    "duration": 340,
                    "data_volume": "2.1 MB",
                    "status": "Completed",
                    "alert_level": "Normal",
                    "geographic_info": "Delhi, IN -> Mumbai, IN"
                },
                {
                    "id": "S003",
                    "timestamp": "2025-08-28 02:15:33",
                    "a_party": "10.0.0.25",
                    "b_party": "185.220.101.42",
                    "type": "Data",
                    "duration": 5400,
                    "data_volume": "2.1 GB",
                    "status": "Completed",
                    "alert_level": "High",
                    "geographic_info": "Mumbai, IN -> Unknown"
                },
                {
                    "id": "S004",
                    "timestamp": "2025-08-28 16:12:45",
                    "a_party": "9876543210",
                    "b_party": "9987654321",
                    "type": "SMS",
                    "duration": 0,
                    "data_volume": "0.1 KB",
                    "status": "Delivered",
                    "alert_level": "Normal",
                    "geographic_info": "Delhi, IN -> Bangalore, IN"
                },
                {
                    "id": "S005",
                    "timestamp": "2025-08-28 03:22:11",
                    "a_party": "172.16.0.50",
                    "b_party": "198.51.100.25",
                    "type": "Data",
                    "duration": 7800,
                    "data_volume": "850 MB",
                    "status": "Interrupted",
                    "alert_level": "Medium",
                    "geographic_info": "Chennai, IN -> USA"
                },
                {
                    "id": "S006",
                    "timestamp": "2025-08-28 18:30:15",
                    "a_party": "192.168.1.100",
                    "b_party": "9876543210",
                    "type": "Email",
                    "duration": 15,
                    "data_volume": "5.2 MB",
                    "status": "Completed",
                    "alert_level": "Normal",
                    "geographic_info": "Mumbai, IN -> Delhi, IN"
                },
                {
                    "id": "S007",
                    "timestamp": "2025-08-28 01:45:20",
                    "a_party": "203.45.67.89",
                    "b_party": "185.220.101.42",
                    "type": "Data",
                    "duration": 3600,
                    "data_volume": "1.5 GB",
                    "status": "Completed", 
                    "alert_level": "High",
                    "geographic_info": "Singapore, SG -> Unknown"
                },
                {
                    "id": "S008",
                    "timestamp": "2025-08-28 12:20:30",
                    "a_party": "9123456789",
                    "b_party": "9987654321",
                    "type": "Voice",
                    "duration": 120,
                    "data_volume": "0.8 MB",
                    "status": "Completed",
                    "alert_level": "Normal",
                    "geographic_info": "Mumbai, IN -> Bangalore, IN"
                },
                {
                    "id": "S009",
                    "timestamp": "2025-08-28 09:15:45",
                    "a_party": "10.0.0.25",
                    "b_party": "192.168.1.100",
                    "type": "Data",
                    "duration": 890,
                    "data_volume": "125 MB",
                    "status": "Completed",
                    "alert_level": "Normal",
                    "geographic_info": "Mumbai, IN -> Mumbai, IN"
                },
                {
                    "id": "S010",
                    "timestamp": "2025-08-28 20:45:12",
                    "a_party": "9876543210",
                    "b_party": "185.220.101.42",
                    "type": "Voice",
                    "duration": 450,
                    "data_volume": "3.2 MB",
                    "status": "Completed",
                    "alert_level": "Medium",
                    "geographic_info": "Delhi, IN -> Unknown"
                },
                {
                    "id": "S011",
                    "timestamp": "2025-08-28 11:30:22",
                    "a_party": "172.16.0.50",
                    "b_party": "9123456789",
                    "type": "SMS",
                    "duration": 0,
                    "data_volume": "0.2 KB",
                    "status": "Delivered",
                    "alert_level": "Normal",
                    "geographic_info": "Chennai, IN -> Mumbai, IN"
                },
                {
                    "id": "S012",
                    "timestamp": "2025-08-28 07:20:30",
                    "a_party": "198.51.100.25",
                    "b_party": "203.45.67.89",
                    "type": "Email",
                    "duration": 25,
                    "data_volume": "8.7 MB",
                    "status": "Completed",
                    "alert_level": "Normal",
                    "geographic_info": "USA -> Singapore, SG"
                }
            ],
            anomalies: [
                {
                    "type": "Unusual Volume",
                    "description": "High data transfer detected from 10.0.0.25 during off-hours",
                    "severity": "High",
                    "session_id": "S003",
                    "timestamp": "2025-08-28 02:15:33"
                },
                {
                    "type": "Suspicious Location",
                    "description": "Multiple communications with unknown/masked location",
                    "severity": "High",
                    "session_id": "S007",
                    "timestamp": "2025-08-28 01:45:20"
                },
                {
                    "type": "Off-Hours Activity",
                    "description": "Large data transfers between 1-4 AM",
                    "severity": "Medium",
                    "session_id": "S005",
                    "timestamp": "2025-08-28 03:22:11"
                },
                {
                    "type": "Unknown Destination",
                    "description": "Communication with masked location from known party",
                    "severity": "Medium",
                    "session_id": "S010",
                    "timestamp": "2025-08-28 20:45:12"
                }
            ],
            statistics: {
                "total_sessions": 12,
                "unique_a_parties": 8,
                "unique_b_parties": 8,
                "suspicious_activities": 4,
                "communication_types": {
                    "Data": 5,
                    "Voice": 3,
                    "SMS": 2,
                    "Email": 2
                },
                "hourly_distribution": [
                    {"hour": 0, "count": 0},
                    {"hour": 1, "count": 1},
                    {"hour": 2, "count": 1},
                    {"hour": 3, "count": 1},
                    {"hour": 7, "count": 1},
                    {"hour": 9, "count": 1},
                    {"hour": 11, "count": 1},
                    {"hour": 12, "count": 1},
                    {"hour": 14, "count": 1},
                    {"hour": 15, "count": 1},
                    {"hour": 16, "count": 1},
                    {"hour": 18, "count": 1},
                    {"hour": 20, "count": 1}
                ]
            }
        };

        this.originalSessions = [...this.data.sessions]; // Keep original data
        this.filteredSessions = [...this.data.sessions];
        this.sortDirection = {};
        this.charts = {};
        this.networkData = { nodes: [], links: [] };
        this.simulation = null;
        
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.updateClock();
        this.setupEventListeners();
        this.populateTable();
        this.createNetworkVisualization();
        this.createCharts();
        this.populateAnomalies();
        this.updateStatistics();
        
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const clockElement = document.getElementById('currentTime');
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            clockElement.textContent = timeString;
        }
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleSearch(e.target.value);
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput ? searchInput.value : '';
                this.handleSearch(query);
            });
        }

        // Filter event listeners with proper change detection
        const typeFilter = document.getElementById('typeFilter');
        const alertFilter = document.getElementById('alertFilter');
        const dateFrom = document.getElementById('dateFrom');
        const dateTo = document.getElementById('dateTo');

        if (typeFilter) {
            typeFilter.addEventListener('change', () => this.applyFilters());
        }
        if (alertFilter) {
            alertFilter.addEventListener('change', () => this.applyFilters());
        }
        if (dateFrom) {
            dateFrom.addEventListener('change', () => this.applyFilters());
        }
        if (dateTo) {
            dateTo.addEventListener('change', () => this.applyFilters());
        }

        const applyBtn = document.getElementById('applyFilters');
        const resetBtn = document.getElementById('resetFilters');
        const exportBtn = document.getElementById('exportData');

        if (applyBtn) applyBtn.addEventListener('click', () => this.applyFilters());
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetFilters());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportData());

        document.querySelectorAll('.sessions-table th[data-sort]').forEach(th => {
            th.addEventListener('click', () => this.sortTable(th.dataset.sort));
        });

        const panelToggle = document.getElementById('panelToggle');
        if (panelToggle) {
            panelToggle.addEventListener('click', () => this.toggleSidePanel());
        }

        const closeModal = document.getElementById('closeModal');
        const sessionModal = document.getElementById('sessionModal');

        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeModal());
        }

        if (sessionModal) {
            sessionModal.addEventListener('click', (e) => {
                if (e.target.id === 'sessionModal') this.closeModal();
            });
        }
    }

    handleSearch(query = '') {
        query = query.toLowerCase();

        if (query === '') {
            this.filteredSessions = [...this.originalSessions];
        } else {
            this.filteredSessions = this.originalSessions.filter(session => 
                session.a_party.toLowerCase().includes(query) ||
                session.b_party.toLowerCase().includes(query) ||
                session.id.toLowerCase().includes(query) ||
                session.type.toLowerCase().includes(query)
            );
        }
        
        this.populateTable();
        this.updateSessionCount();
        this.updateVisualizationsForFilter();
    }

    applyFilters() {
        const typeFilter = document.getElementById('typeFilter');
        const alertFilter = document.getElementById('alertFilter');
        const dateFrom = document.getElementById('dateFrom');
        const dateTo = document.getElementById('dateTo');
        const searchInput = document.getElementById('searchInput');

        const typeValue = typeFilter ? typeFilter.value : '';
        const alertValue = alertFilter ? alertFilter.value : '';
        const dateFromValue = dateFrom ? dateFrom.value : '';
        const dateToValue = dateTo ? dateTo.value : '';
        const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';

        this.filteredSessions = this.originalSessions.filter(session => {
            const sessionDate = session.timestamp.split(' ')[0];
            
            const typeMatch = !typeValue || session.type === typeValue;
            const alertMatch = !alertValue || session.alert_level === alertValue;
            const dateMatch = (!dateFromValue || sessionDate >= dateFromValue) && 
                             (!dateToValue || sessionDate <= dateToValue);
            const searchMatch = !searchQuery || 
                session.a_party.toLowerCase().includes(searchQuery) ||
                session.b_party.toLowerCase().includes(searchQuery) ||
                session.id.toLowerCase().includes(searchQuery) ||
                session.type.toLowerCase().includes(searchQuery);
            
            return typeMatch && alertMatch && dateMatch && searchMatch;
        });

        this.populateTable();
        this.updateSessionCount();
        this.updateVisualizationsForFilter();
    }

    resetFilters() {
        console.log('Resetting filters...');
        
        // Clear all filter inputs
        const typeFilter = document.getElementById('typeFilter');
        const alertFilter = document.getElementById('alertFilter');
        const dateFrom = document.getElementById('dateFrom');
        const dateTo = document.getElementById('dateTo');
        const searchInput = document.getElementById('searchInput');

        if (typeFilter) typeFilter.value = '';
        if (alertFilter) alertFilter.value = '';
        if (dateFrom) dateFrom.value = '2025-08-28';
        if (dateTo) dateTo.value = '2025-08-28';
        if (searchInput) searchInput.value = '';
        
        // Reset to original dataset
        this.filteredSessions = [...this.originalSessions];
        console.log('Restored sessions count:', this.filteredSessions.length);
        
        this.populateTable();
        this.updateSessionCount();
        this.updateVisualizationsForFilter();
    }

    updateVisualizationsForFilter() {
        this.updateTypeChart();
        this.updateTimelineChart();
        this.updateNetworkVisualization();
        if (this.charts.topPartiesChart) {
            this.updateTopPartiesChart();
        }
    }

    sortTable(field) {
        const direction = this.sortDirection[field] === 'asc' ? 'desc' : 'asc';
        this.sortDirection[field] = direction;

        this.filteredSessions.sort((a, b) => {
            let aValue = a[field];
            let bValue = b[field];

            if (field === 'duration') {
                aValue = parseInt(aValue);
                bValue = parseInt(bValue);
            }

            if (field === 'timestamp') {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            }

            if (aValue < bValue) return direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        this.populateTable();
    }

    populateTable() {
        const tbody = document.getElementById('sessionsTableBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.filteredSessions.forEach(session => {
            const row = document.createElement('tr');
            row.className = session.alert_level.toLowerCase() + '-alert';
            row.addEventListener('click', () => this.showSessionModal(session));

            const formatDuration = (seconds) => {
                if (seconds === 0) return 'N/A';
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
            };

            row.innerHTML = `
                <td>${new Date(session.timestamp).toLocaleString()}</td>
                <td>${session.a_party}</td>
                <td>${session.b_party}</td>
                <td>${session.type}</td>
                <td>${formatDuration(session.duration)}</td>
                <td>${session.data_volume}</td>
                <td><span class="alert-badge ${session.alert_level.toLowerCase()}">${session.alert_level}</span></td>
            `;

            tbody.appendChild(row);
        });
    }

    updateSessionCount() {
        const sessionCount = document.getElementById('sessionCount');
        if (sessionCount) {
            sessionCount.textContent = `${this.filteredSessions.length} sessions`;
        }
    }

    showSessionModal(session) {
        const modal = document.getElementById('sessionModal');
        const modalBody = document.getElementById('modalBody');

        if (!modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="detail-label">Session ID</span>
                    <span class="detail-value">${session.id}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Timestamp</span>
                    <span class="detail-value">${new Date(session.timestamp).toLocaleString()}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">A-Party</span>
                    <span class="detail-value">${session.a_party}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">B-Party</span>
                    <span class="detail-value">${session.b_party}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Communication Type</span>
                    <span class="detail-value">${session.type}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Duration</span>
                    <span class="detail-value">${session.duration === 0 ? 'N/A' : session.duration + ' seconds'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Data Volume</span>
                    <span class="detail-value">${session.data_volume}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Status</span>
                    <span class="detail-value">${session.status}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Alert Level</span>
                    <span class="detail-value">
                        <span class="alert-badge ${session.alert_level.toLowerCase()}">${session.alert_level}</span>
                    </span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Geographic Route</span>
                    <span class="detail-value">${session.geographic_info}</span>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    closeModal() {
        const modal = document.getElementById('sessionModal');
        if (modal) modal.classList.add('hidden');
    }

    createNetworkVisualization() {
        const container = document.getElementById('networkContainer');
        if (!container) return;

        container.innerHTML = '<div class="loading">Loading network visualization...</div>';

        this.processNetworkData();

        if (this.simulation) {
            this.simulation.stop();
        }

        const svg = d3.select(container)
            .append('svg')
            .attr('id', 'networkSvg')
            .attr('width', '100%')
            .attr('height', '100%');

        const width = container.clientWidth;
        const height = 300;

        this.simulation = d3.forceSimulation(this.networkData.nodes)
            .force('link', d3.forceLink(this.networkData.links).id(d => d.id).distance(80))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2));

        const link = svg.append('g')
            .selectAll('line')
            .data(this.networkData.links)
            .join('line')
            .attr('class', d => `network-link ${d.alert_level.toLowerCase()}-alert`)
            .attr('stroke-width', d => d.weight);

        const node = svg.append('g')
            .selectAll('g')
            .data(this.networkData.nodes)
            .join('g')
            .attr('class', 'network-node')
            .call(d3.drag()
                .on('start', (event, d) => this.dragstarted(event, d))
                .on('drag', (event, d) => this.dragged(event, d))
                .on('end', (event, d) => this.dragended(event, d)));

        node.append('circle')
            .attr('r', d => Math.max(8, Math.min(20, d.connections * 2)))
            .attr('fill', d => this.getNodeColor(d.alertLevel))
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);

        node.append('text')
            .attr('class', 'network-text')
            .attr('dy', 25)
            .text(d => d.label);

        node.on('click', (event, d) => {
            this.highlightNodeConnections(d.id);
        });

        this.simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('transform', d => `translate(${d.x},${d.y})`);
        });
    }

    processNetworkData() {
        const nodes = new Map();
        const links = [];

        this.filteredSessions.forEach(session => {
            if (!nodes.has(session.a_party)) {
                nodes.set(session.a_party, {
                    id: session.a_party,
                    label: this.formatNodeLabel(session.a_party),
                    connections: 0,
                    alertLevel: 'Normal'
                });
            }
            if (!nodes.has(session.b_party)) {
                nodes.set(session.b_party, {
                    id: session.b_party,
                    label: this.formatNodeLabel(session.b_party),
                    connections: 0,
                    alertLevel: 'Normal'
                });
            }

            const aNode = nodes.get(session.a_party);
            const bNode = nodes.get(session.b_party);
            
            aNode.connections++;
            bNode.connections++;

            if (session.alert_level === 'High') {
                aNode.alertLevel = 'High';
                bNode.alertLevel = 'High';
            } else if (session.alert_level === 'Medium' && aNode.alertLevel === 'Normal') {
                aNode.alertLevel = 'Medium';
                bNode.alertLevel = 'Medium';
            }

            links.push({
                source: session.a_party,
                target: session.b_party,
                alert_level: session.alert_level,
                weight: session.alert_level === 'High' ? 3 : session.alert_level === 'Medium' ? 2 : 1
            });
        });

        this.networkData = {
            nodes: Array.from(nodes.values()),
            links: links
        };
    }

    formatNodeLabel(id) {
        return id.length > 12 ? id.substring(0, 12) + '...' : id;
    }

    getNodeColor(alertLevel) {
        const colors = {
            'Normal': '#1FB8CD',
            'Medium': '#E68161',
            'High': '#FF5459'
        };
        return colors[alertLevel] || colors.Normal;
    }

    updateNetworkVisualization() {
        this.createNetworkVisualization();
    }

    dragstarted(event, d) {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    dragended(event, d) {
        if (!event.active) this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    highlightNodeConnections(nodeId) {
        this.filteredSessions = this.originalSessions.filter(session => 
            session.a_party === nodeId || session.b_party === nodeId
        );
        this.populateTable();
        this.updateSessionCount();
        this.updateVisualizationsForFilter();
    }

    createCharts() {
        this.createTypeChart();
        this.createTimelineChart();
        this.createTopPartiesChart();
    }

    createTypeChart() {
        const ctx = document.getElementById('typeChart');
        if (!ctx) return;
        
        const typeData = this.getTypeDistribution(this.filteredSessions);
        
        this.charts.typeChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(typeData),
                datasets: [{
                    data: Object.values(typeData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderColor: '#1f2121',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#f5f5f5',
                            padding: 10,
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const type = Object.keys(typeData)[index];
                        this.filterByType(type);
                    }
                }
            }
        });
    }

    createTimelineChart() {
        const ctx = document.getElementById('timelineChart');
        if (!ctx) return;
        
        const hourlyData = this.getHourlyDistribution(this.filteredSessions);
        
        this.charts.timelineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: hourlyData.labels,
                datasets: [{
                    label: 'Total Communications',
                    data: hourlyData.data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f5f5f5',
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#f5f5f5',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#f5f5f5',
                            font: {
                                size: 10
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const hour = index;
                        this.filterByHour(hour);
                    }
                }
            }
        });
    }

    createTopPartiesChart() {
        const ctx = document.getElementById('topPartiesChart');
        if (!ctx) return;

        const topParties = this.getTopParties(this.filteredSessions);

        this.charts.topPartiesChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: topParties.labels,
                datasets: [{
                    label: 'Communication Count',
                    data: topParties.data,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
                    borderColor: '#1f2121',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: '#f5f5f5'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#f5f5f5'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }

    getTypeDistribution(sessions) {
        const types = {};
        sessions.forEach(session => {
            types[session.type] = (types[session.type] || 0) + 1;
        });
        return types;
    }

    getHourlyDistribution(sessions) {
        const hours = Array.from({length: 24}, (_, i) => i);
        const hourlyCount = {};
        
        sessions.forEach(session => {
            const hour = new Date(session.timestamp).getHours();
            hourlyCount[hour] = (hourlyCount[hour] || 0) + 1;
        });

        return {
            labels: hours.map(h => `${h}:00`),
            data: hours.map(h => hourlyCount[h] || 0)
        };
    }

    getTopParties(sessions) {
        const partyCount = {};
        
        sessions.forEach(session => {
            partyCount[session.a_party] = (partyCount[session.a_party] || 0) + 1;
            partyCount[session.b_party] = (partyCount[session.b_party] || 0) + 1;
        });

        const sorted = Object.entries(partyCount)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 6);

        return {
            labels: sorted.map(([party]) => this.formatNodeLabel(party)),
            data: sorted.map(([,count]) => count)
        };
    }

    updateTypeChart() {
        if (!this.charts.typeChart) return;
        
        const typeData = this.getTypeDistribution(this.filteredSessions);
        this.charts.typeChart.data.labels = Object.keys(typeData);
        this.charts.typeChart.data.datasets[0].data = Object.values(typeData);
        this.charts.typeChart.update();
    }

    updateTimelineChart() {
        if (!this.charts.timelineChart) return;
        
        const hourlyData = this.getHourlyDistribution(this.filteredSessions);
        this.charts.timelineChart.data.labels = hourlyData.labels;
        this.charts.timelineChart.data.datasets[0].data = hourlyData.data;
        this.charts.timelineChart.update();
    }

    updateTopPartiesChart() {
        if (!this.charts.topPartiesChart) return;
        
        const topParties = this.getTopParties(this.filteredSessions);
        this.charts.topPartiesChart.data.labels = topParties.labels;
        this.charts.topPartiesChart.data.datasets[0].data = topParties.data;
        this.charts.topPartiesChart.update();
    }

    filterByType(type) {
        const typeFilter = document.getElementById('typeFilter');
        if (typeFilter) {
            typeFilter.value = type;
            this.applyFilters();
        }
    }

    filterByHour(hour) {
        this.filteredSessions = this.originalSessions.filter(session => {
            const sessionHour = new Date(session.timestamp).getHours();
            return sessionHour === hour;
        });
        
        this.populateTable();
        this.updateSessionCount();
        this.updateVisualizationsForFilter();
    }

    populateAnomalies() {
        const anomaliesList = document.getElementById('anomaliesList');
        if (!anomaliesList) return;

        anomaliesList.innerHTML = '';

        this.data.anomalies.forEach(anomaly => {
            const anomalyDiv = document.createElement('div');
            anomalyDiv.className = `anomaly-item ${anomaly.severity.toLowerCase()}`;
            
            anomalyDiv.innerHTML = `
                <div class="anomaly-type">${anomaly.type}</div>
                <div class="anomaly-description">${anomaly.description}</div>
                <div style="font-size: 10px; color: #aaa; margin-top: 4px;">${anomaly.timestamp}</div>
            `;
            
            anomalyDiv.addEventListener('click', () => {
                const session = this.data.sessions.find(s => s.id === anomaly.session_id);
                if (session) {
                    this.showSessionModal(session);
                }
            });
            
            anomaliesList.appendChild(anomalyDiv);
        });
    }

    updateStatistics() {
        const stats = this.data.statistics;
        const elements = {
            totalSessions: document.getElementById('totalSessions'),
            suspiciousCount: document.getElementById('suspiciousCount'),
            totalComms: document.getElementById('totalComms'),
            uniqueParties: document.getElementById('uniqueParties'),
            uniqueBParties: document.getElementById('uniqueBParties'),
            suspiciousActs: document.getElementById('suspiciousActs')
        };

        if (elements.totalSessions) elements.totalSessions.textContent = stats.total_sessions;
        if (elements.suspiciousCount) elements.suspiciousCount.textContent = stats.suspicious_activities;
        if (elements.totalComms) elements.totalComms.textContent = stats.total_sessions;
        if (elements.uniqueParties) elements.uniqueParties.textContent = stats.unique_a_parties;
        if (elements.uniqueBParties) elements.uniqueBParties.textContent = stats.unique_b_parties;
        if (elements.suspiciousActs) elements.suspiciousActs.textContent = stats.suspicious_activities;
    }

    toggleSidePanel() {
        const sidePanel = document.getElementById('sidePanel');
        if (sidePanel) {
            sidePanel.classList.toggle('collapsed');
        }
    }

    exportData() {
        try {
            const csvContent = this.convertToCSV(this.filteredSessions);
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            
            link.setAttribute('href', url);
            link.setAttribute('download', `ipdr_sessions_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Export failed:', error);
            alert('Export failed. Please try again.');
        }
    }

    convertToCSV(data) {
        const headers = ['Session ID', 'Timestamp', 'A-Party', 'B-Party', 'Type', 'Duration', 'Data Volume', 'Status', 'Alert Level', 'Geographic Info'];
        const csvContent = [
            headers.join(','),
            ...data.map(session => [
                session.id,
                session.timestamp,
                session.a_party,
                session.b_party,
                session.type,
                session.duration,
                `"${session.data_volume}"`,
                session.status,
                session.alert_level,
                `"${session.geographic_info}"`
            ].join(','))
        ].join('\n');
        
        return csvContent;
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IPDRDashboard();
});