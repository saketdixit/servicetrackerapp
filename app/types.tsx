/*
import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'; 
*/

// Drawer Navigation Props
export type DrawerParamList = { //This is a type because navigation docs require it so
    Home: undefined;
    Profile: { userId: string };
    Settings: undefined;
    Logout: undefined;
    
};

//Home Page Tab Navigation
export type TabParamList = {
    History: undefined;
    Dashboard: undefined;
    Calendar: undefined;
};

/*
type HomeNavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>;
type ProfileNavigationProp = DrawerNavigationProp<DrawerParamList, 'Profile'>;
type SettingsNavigationProp = DrawerNavigationProp<DrawerParamList, 'Settings'>;
type LogoutNavigationProp = DrawerNavigationProp<DrawerParamList, 'Logout'>;

type HomeRouteProp = RouteProp<DrawerParamList, 'Home'>;
type ProfileRouteProp = RouteProp<DrawerParamList, 'Profile'>;
type SettingsRouteProp = RouteProp<DrawerParamList, 'Settings'>;
type LogoutRouteProp = RouteProp<DrawerParamList, 'Logout'>;
*/

/*
type HistoryNavigationProp = BottomTabNavigationProp<TabParamList, 'History'>;
type DashboardNavigationProp = BottomTabNavigationProp<TabParamList, 'Dashboard'>;
type CalendarNavigationProp = BottomTabNavigationProp<TabParamList, 'Calendar'>;

type HistoryRouteProp = RouteProp<TabParamList, 'History'>;
type DashboardRouteProp = RouteProp<TabParamList, 'Dashboard'>;
type CalendarRouteProp = RouteProp<TabParamList, 'Calendar'>;
*/

/*
export type HomeProps = {
    navigation: HomeNavigationProp;
    route: HomeRouteProp;
};

export type ProfileProps = {
    navigation: ProfileNavigationProp;
    route: ProfileRouteProp;
};

export type SettingsProps = {
    navigation: SettingsNavigationProp;
    route: SettingsRouteProp;
};

export type LogoutProps = {
    navigation: LogoutNavigationProp;
    route: LogoutRouteProp;
};

export type HistoryProps = {
    navigation: HistoryNavigationProp;
    route: HistoryRouteProp;
};

export type DashboardProps = {
    navigation: DashboardNavigationProp;
    route: DashboardRouteProp;
};

export type CalendarProps = {
    navigation: CalendarNavigationProp;
    route: CalendarRouteProp;
};
*/

export interface ProfileData {
    name: string; //name of user
    user_id: number;
    services: Service[]; // list of services contracted
    image? : string //optional image
}
  
export interface Service {
    id: number;
    name: string;
    type: string; //'Maid' | 'Delivery' | 'Gardener' | 'Cook' | 'Other'; //Enum for type of helper
    tasks: Task[]; // List of specific tasks offered by the service
    image?: string; // Path (or URL) to the service provider's image
    pay_freq: number; // Frequency of payment (e.g., 1 for weekly)
}
  
export interface Task {
    name: string; // Task description (e.g., "Clean bathroom")
    compensation: number; // Amount paid for the task
    schedule: Schedule; // Object defining the task schedule
    completedHistory: CompletedHistory[]; // Array of completed/absent records
    paymentFrequency: 'weekly' | 'monthly'; // Enum for payment frequency
    isPaid: boolean; // Flag indicating if payment is recorded
}

export interface Schedule {
    days: string[]; // Array of days (e.g., ["monday", "wednesday"])
}
  
interface CompletedHistory {
    date: string; // Date of the task completion/absence
    attendance: boolean; // Flag indicating if the helper was absent
}