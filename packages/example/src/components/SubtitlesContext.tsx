import { createContext, useContext, useMemo, useState } from 'react';

const SubtitlesContext = createContext({
  subtitles: 'No',
  setSubtitles: (subtitles: string) => {},
});

export const SubtitlesProvider = ({ children }: { children: React.ReactNode }) => {
  const [subtitles, setSubtitles] = useState<string>('No');

  const value = useMemo(() => {
    return { subtitles, setSubtitles };
  }, [subtitles, setSubtitles]);

  return <SubtitlesContext.Provider value={value}>{children}</SubtitlesContext.Provider>;
};

export const useSubtitlesContext = () => useContext(SubtitlesContext);
