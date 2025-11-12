export const PDF_CONFIG = {
  fonts: {
    title: { size: 20, style: 'bold' as const },
    subtitle: { size: 12, style: 'normal' as const },
    sectionHeader: { size: 14, style: 'bold' as const },
    body: { size: 11, style: 'normal' as const },
    table: { size: 10, style: 'normal' as const },
    tableHeader: { size: 10, style: 'bold' as const }
  },
  layout: {
    margin: 20,
    titleY: 30,
    subtitleY: 40,
    statsStartY: 60,
    statsLineHeight: 10,
    tableStartY: 130,
    rowHeight: 8,
    headerOffset: 2,
    bottomMargin: 30
  },
  table: {
    headers: ['#', 'Name', 'Username', 'Phone'],
    columnWidths: [15, 50, 70, 40]
  }
};

export const PRINT_STYLES = {
  fontFamily: 'Arial, sans-serif',
  lineHeight: 1.4,
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px'
  },
  cell: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left' as const
  },
  header: {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold'
  },
  evenRow: {
    backgroundColor: '#f9f9f9'
  },
  statsBox: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px'
  }
};

export const DATE_FORMATS = {
  date: () => new Date().toLocaleDateString(),
  time: () => new Date().toLocaleTimeString(),
  dateTime: () => `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`
};