import "./loading.css"

function LoadingPage() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default LoadingPage;
