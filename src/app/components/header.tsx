'use client'


import { TabNav, IconButton, Heading } from '@radix-ui/themes';
import { TextAlignRightIcon } from '@radix-ui/react-icons';


import { twJoin } from 'tailwind-merge';
import { lightOrDark } from '../utils/commonUtils';
import { useAppContext } from './contexts/appContext';
//import { Button } from './custom-button';
/*import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import PublicationLogo from './publication-logo';*/
import PublicationNavLinks from './publication-nav-links';
import PublicationSocialLinks from './publication-social-links';

import { DirectionProvider } from '@radix-ui/react-direction';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { Reem_Kufi } from "next/font/google";

const reem_Kufi = Reem_Kufi({ subsets: ["latin"],weight:'400' });

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {

	const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['الجهل', 'الأم', 'العمل', 'الحصان'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText className='text-right' primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List >
        {['الجزائر', 'تونس', 'فلسطين'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText className='text-right' primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


	const { currentMenuId, isHome } = props;
	//const { publication } = useAppContext();

	const publication ={
		/** GitHub URL of the publication. */
		github:"abdou", 
		/** Hashnode profile of author of the publication. */
		hashnode:"abdou", 
		/** Instagram URL of the publication. */
		instagram:"abdou", 
		/** LinkedIn URL of the publication. */
		linkedin:"abdou", 
		/** Mastodon URL of the publication. */
		mastodon:"abdou", 
		/** Twitter URL of the publication. */
		twitter:"abdou", 
		/** Website URL of the publication. */
		website:"abdou", 
		/** YouTube URL of the publication. */
		youtube:"abdou", 
	  }
	  const enabledPages =  { newsletter: false, members: false };
	  const navbarItems = [{ id: "aaa",
	   label: "العلم",
		 url: "string | null", 
		 priority: 12, 
		  series: {  id: "strisng" } ,
	   page: {  id: "ss" }  },
	   { id: "aaas",
	   label: "الرسم",
		 url: "string | ull", 
		 priority: 22, 
		  series: {  id: "stssring" } ,
	   page: {  id: "strings" }  },
	   { id: "asaa",
	   label: "الانترنيت",
		 url: "string | nl", 
		 priority: 2, 
		  series: {  id: "string" } ,
	   page: {  id: "string" }  }]
	return (
		<header
			className="blog-header relative z-50 w-full "
		>
			<div className="container mx-auto px-2 md:px-4 2xl:px-10">
			
				<div className="hidden relative z-40 md:flex flex-row items-center justify-center pb-2 pt-8 md:mb-4">
				
					<div className="flex flex-row items-center py-1">
						{/* Navigation for mobile view */}
						<div
							className={twJoin(
								'md:hidden','dark:text-white',
							)}
						>
							{/*<HeaderLeftSidebar publication={publication} />*/}
							
						</div>
						<div className="hidden md:block">
							 {/*<PublicationLogo publication={publication} size="lg" withProfileImage /> */}
							 <Heading as="h1" color='bronze' className={twJoin(reem_Kufi.className, 'text-6xl', )}>الهلال</Heading>
						</div>
					</div>

					<div
						className={twJoin(
							'flex flex-row items-center','dark:text-white',
						)}
					>
						 {/* <HeaderBlogSearch publication={publication} /> */}
						 {/*<Button as="a" href="#" type="primary" label="Sign up" /> */}
						 
					</div>
				</div>

				{/* Logo for mobile view
				<div className="mx-auto my-5 flex w-2/3 flex-row items-center justify-center md:hidden">
					 {/* <PublicationLogo publication={publication} size="xl" />
					 <Heading as="h1" color='bronze' className={twJoin(reem_Kufi.className, 'text-6xl', )}>الهلال</Heading>
				</div> */}

				{/* <div className="blog-sub-header" data-testid="blog-sub-header">
					{/* Desktop 
					<div className="justify-betweem mx-0 mb-2 hidden w-full flex-row items-center justify-center md:flex">
						  <PublicationSocialLinks
							links={publication}
						/> 
					</div>
					{/* Mobile view 
					<div className="mb-2 flex w-full flex-col items-center md:hidden">
						<PublicationSocialLinks
							links={publication}
						/>
					</div>
				</div> */}

				
					{/* <PublicationNavLinks
						isHome={isHome}
						currentActiveMenuItemId={currentMenuId}
						enabledPages={enabledPages}
						navbarItems={navbarItems || []}
					/> */}
					
					<DirectionProvider dir="rtl">
						<TabNav.Root className='flex-row-reverse mt-2 md:mt-8 md:flex-row items-center justify-center overflow-hidden text-base flex relative' data-tom='flex relative flex-row-reverse md:flex-row items-center justify-center overflow-hidden text-base mt-8' >
							<div className="absolute inset-y-0 right-0">
							
							<IconButton variant='soft' onClick={toggleDrawer(true)} ><TextAlignRightIcon width="22" height="22" /></IconButton>
							<Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
							{DrawerList}
							</Drawer></div>
							<TabNav.Link className='md:hidden' href="#"><Heading as="h1" color='bronze' className={twJoin(reem_Kufi.className, 'text-4xl pb-2', )}>الهلال</Heading></TabNav.Link>
							<TabNav.Link className='hidden md:inline' href="#">العلم</TabNav.Link>
							<TabNav.Link className='hidden md:inline' href="#">الرسم</TabNav.Link>
							<TabNav.Link className='hidden md:inline' href="#">الانترنيت</TabNav.Link>
							<TabNav.Link className='hidden md:inline' href="#">العلم</TabNav.Link>
							<TabNav.Link className='hidden md:inline' href="#">الرسم</TabNav.Link>
							<TabNav.Link className='hidden md:inline' href="#">الانترنيت</TabNav.Link>
						</TabNav.Root>
					</DirectionProvider>
			</div>
			
		</header>
	);
};