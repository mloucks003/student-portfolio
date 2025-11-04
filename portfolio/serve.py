#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio Testing

This script starts a local web server so you can test your portfolio
before uploading to AWS S3 or any other hosting service.

HOW TO USE:
1. Open terminal/command prompt
2. Navigate to the portfolio folder
3. Run: python serve.py
4. Open browser to: http://localhost:8000
5. Press Ctrl+C to stop the server

REQUIREMENTS:
- Python 3 (comes pre-installed on Mac/Linux)
- No additional packages needed!
"""

import http.server
import socketserver
import webbrowser
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve files from the portfolio directory"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Add headers to prevent caching during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    """Start the web server"""
    
    print("=" * 60)
    print("🔒 Cybersecurity Portfolio - Local Development Server")
    print("=" * 60)
    print(f"\n📁 Serving files from: {DIRECTORY}")
    print(f"🌐 Server running at: http://localhost:{PORT}")
    print(f"\n✅ Open your browser to: http://localhost:{PORT}")
    print("\n💡 Tips:")
    print("   - Edit files and refresh browser to see changes")
    print("   - Press Ctrl+C to stop the server")
    print("   - No need to restart server for HTML/CSS/JS changes")
    print("\n" + "=" * 60)
    
    # Try to open browser automatically
    try:
        webbrowser.open(f'http://localhost:{PORT}')
        print("✅ Browser opened automatically!\n")
    except:
        print("⚠️  Could not open browser automatically.")
        print(f"   Please manually open: http://localhost:{PORT}\n")
    
    # Start the server
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        try:
            print(f"🚀 Server started successfully!")
            print("   Waiting for connections...\n")
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n" + "=" * 60)
            print("🛑 Server stopped by user")
            print("=" * 60)
            print("\n✅ Portfolio server shut down successfully!")
            print("   Thanks for using the local development server!\n")

if __name__ == "__main__":
    main()
