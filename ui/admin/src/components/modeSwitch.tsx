import { darkModeAtom } from '@/atoms/darkMode';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAtom } from 'jotai';
import { Moon, Sun } from 'lucide-react';

export function ModeSwitch() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const onChange = (e: boolean) => {
    setDarkMode(e);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className='flex items-center space-x-2'>
      <Switch id='dark-mode' onCheckedChange={onChange} checked={darkMode} />
      <Label htmlFor='dark-mode'>{darkMode ? <Moon /> : <Sun />}</Label>
    </div>
  );
}

export default ModeSwitch;
