const LanguageSwitcher = () => {
  return (
    <div>
      <button
        className="btn font-bold"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
      >
        Language
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm text-white"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
      >
        <li>
          <a>English</a>
        </li>
        <li>
          <a>Bangla</a>
        </li>
        <li>
          <a>Hindi</a>
        </li>
        <li>
          <a>Punjabi</a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
