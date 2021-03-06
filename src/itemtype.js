/* --------------------------------------------------------------------
*
*  LICENSE
*
*  This file is part of the GLPI API Client Library for Node.js,
*  a subproject of GLPI. GLPI is a free IT Asset Management.
*
*  GLPI is free software: you can redistribute it and/or
*  modify it under the terms of the GNU General Public License
*  as published by the Free Software Foundation; either version 3
*  of the License, or (at your option) any later version.
*
*  GLPI is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*  --------------------------------------------------------------------
*  @author    Gianfranco Manganiello - <gmanganiello@teclib.com>
*  @copyright (C) 2017 Teclib' and contributors.
*  @license   GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
*  @link      https://github.com/glpi-project/node-module-glpi
*  @link      http://www.glpi-project.org/
*  -------------------------------------------------------------------- */

module.exports = {
    'Alert': { 'name': 'Alert' },
    'AuthLDAP': { 'name': 'AuthLDAP' },
    'Computer': { 'name': 'Computer' },
    'Config': { 'name': 'Config' },
    'ConsumableItem': { 'name': 'ConsumableItem' },
    'Contact': { 'name': 'Contact' },
    'Contract': { 'name': 'Contract' },
    'CronTask': { 'name': 'CronTask' },
    'CronTaskLog': { 'name': 'CronTaskLog' },
    'DBConnection': { 'name': 'DBConnection' },
    'DisplayPreference': { 'name': 'DisplayPreference' },
    'Document': { 'name': 'Document' },
    'AuthLdapReplicate': { 'name': 'AuthLdapReplicate' },
    'Event': { 'name': 'Event' },
    'KnowbaseItem': { 'name': 'KnowbaseItem' },
    'Link': { 'name': 'Link' },
    'Log': { 'name': 'Log' },
    'MailCollector': { 'name': 'MailCollector' },
    'Monitor': { 'name': 'Monitor' },
    'NetworkEquipment': { 'name': 'NetworkEquipment' },
    'Notification': { 'name': 'Notification' },
    'NotificationEvent': { 'name': 'NotificationEvent' },
    'NotificationMailSetting': { 'name': 'NotificationMailSetting' },
    'AuthMail': { 'name': 'AuthMail' },
    'NotificationTemplate': { 'name': 'NotificationTemplate' },
    'NotImportedEmail': { 'name': 'NotImportedEmail' },
    'Peripheral': { 'name': 'Peripheral' },
    'Phone': { 'name': 'Phone' },
    'Plugin': { 'name': 'Plugin' },
    'Printer': { 'name': 'Printer' },
    'Profile': { 'name': 'Profile' },
    'Project': { 'name': 'Project' },
    'QueuedMail': { 'name': 'QueuedMail' },
    'Reminder': { 'name': 'Reminder' },
    'Bookmark': { 'name': 'Bookmark' },
    'RSSFeed': { 'name': 'RSSFeed' },
    'Rule': { 'name': 'Rule' },
    'RuleCollection': { 'name': 'RuleCollection' },
    'SLA': { 'name': 'SLA' },
    'SlaLevel_Ticket': { 'name': 'SlaLevel_Ticket' },
    'Software': { 'name': 'Software' },
    'SoftwareLicense': { 'name': 'SoftwareLicense' },
    'Supplier': { 'name': 'Supplier' },
    'TicketFollowup': { 'name': 'TicketFollowup' },
    'TicketSatisfaction': { 'name': 'TicketSatisfaction' },
    'CartridgeItem': { 'name': 'CartridgeItem' },
    'Transfer': { 'name': 'Transfer' },
    'User': { 'name': 'User' },
    'CommonDBConnexity': { 'name': 'CommonDBConnexity' },
    'CommonDropdown': { 'name': 'CommonDropdown' },
    'CommonITILObject': { 'name': 'CommonITILObject' },
    'CommonITILTask': { 'name': 'CommonITILTask' },
    'AutoUpdateSystem': { 'name': 'AutoUpdateSystem' },
    'Blacklist': { 'name': 'Blacklist' },
    'CartridgeItemType': { 'name': 'CartridgeItemType' },
    'Item_DeviceSoundCard': { 'name': 'Item_DeviceSoundCard' },
    'Item_Problem': { 'name': 'Item_Problem' },
    'Item_Project': { 'name': 'Item_Project' },
    'Item_Ticket': { 'name': 'Item_Ticket' },
    'ITILCategory': { 'name': 'ITILCategory' },
    'KnowbaseItem_Profile': { 'name': 'KnowbaseItem_Profile' },
    'KnowbaseItem_User': { 'name': 'KnowbaseItem_User' },
    'KnowbaseItemCategory': { 'name': 'KnowbaseItemCategory' },
    'KnowbaseItemTranslation': { 'name': 'KnowbaseItemTranslation' },
    'Link_Itemtype': { 'name': 'Link_Itemtype' },
    'Change': { 'name': 'Change' },
    'Location': { 'name': 'Location' },
    'Manufacturer': { 'name': 'Manufacturer' },
    'MonitorModel': { 'name': 'MonitorModel' },
    'MonitorType': { 'name': 'MonitorType' },
    'Netpoint': { 'name': 'Netpoint' },
    'Network': { 'name': 'Network' },
    'NetworkAlias': { 'name': 'NetworkAlias' },
    'NetworkEquipmentFirmware': { 'name': 'NetworkEquipmentFirmware' },
    'NetworkEquipmentModel': { 'name': 'NetworkEquipmentModel' },
    'NetworkEquipmentType': { 'name': 'NetworkEquipmentType' },
    'Change_Group': { 'name': 'Change_Group' },
    'NetworkInterface': { 'name': 'NetworkInterface' },
    'NetworkName': { 'name': 'NetworkName' },
    'NetworkPort': { 'name': 'NetworkPort' },
    'NetworkPort_NetworkPort': { 'name': 'NetworkPort_NetworkPort' },
    'NetworkPort_Vlan': { 'name': 'NetworkPort_Vlan' },
    'NetworkPortAggregate': { 'name': 'NetworkPortAggregate' },
    'NetworkPortAlias': { 'name': 'NetworkPortAlias' },
    'NetworkPortDialup': { 'name': 'NetworkPortDialup' },
    'NetworkPortEthernet': { 'name': 'NetworkPortEthernet' },
    'NetworkPortInstantiation': { 'name': 'NetworkPortInstantiation' },
    'Change_Item': { 'name': 'Change_Item' },
    'NetworkPortLocal': { 'name': 'NetworkPortLocal' },
    'NetworkPortMigration': { 'name': 'NetworkPortMigration' },
    'NetworkPortWifi': { 'name': 'NetworkPortWifi' },
    'Notepad': { 'name': 'Notepad' },
    'NotificationTarget': { 'name': 'NotificationTarget' },
    'NotificationTargetCartridgeItem': { 'name': 'NotificationTargetCartridgeItem' },
    'NotificationTargetChange': { 'name': 'NotificationTargetChange' },
    'NotificationTargetCommonITILObject': { 'name': 'NotificationTargetCommonITILObject' },
    'NotificationTargetConsumableItem': { 'name': 'NotificationTargetConsumableItem' },
    'NotificationTargetContract': { 'name': 'NotificationTargetContract' },
    'Change_Problem': { 'name': 'Change_Problem' },
    'NotificationTargetCrontask': { 'name': 'NotificationTargetCrontask' },
    'NotificationTargetDBConnection': { 'name': 'NotificationTargetDBConnection' },
    'NotificationTargetFieldUnicity': { 'name': 'NotificationTargetFieldUnicity' },
    'NotificationTargetInfocom': { 'name': 'NotificationTargetInfocom' },
    'NotificationTargetMailCollector': { 'name': 'NotificationTargetMailCollector' },
    'NotificationTargetPlanningRecall': { 'name': 'NotificationTargetPlanningRecall' },
    'NotificationTargetProblem': { 'name': 'NotificationTargetProblem' },
    'NotificationTargetProject': { 'name': 'NotificationTargetProject' },
    'NotificationTargetProjectTask': { 'name': 'NotificationTargetProjectTask' },
    'NotificationTargetReservation': { 'name': 'NotificationTargetReservation' },
    'Change_Project': { 'name': 'Change_Project' },
    'NotificationTargetSoftwareLicense': { 'name': 'NotificationTargetSoftwareLicense' },
    'NotificationTargetTicket': { 'name': 'NotificationTargetTicket' },
    'NotificationTargetUser': { 'name': 'NotificationTargetUser' },
    'NotificationTemplateTranslation': { 'name': 'NotificationTemplateTranslation' },
    'OperatingSystem': { 'name': 'OperatingSystem' },
    'OperatingSystemServicePack': { 'name': 'OperatingSystemServicePack' },
    'OperatingSystemVersion': { 'name': 'OperatingSystemVersion' },
    'PeripheralModel': { 'name': 'PeripheralModel' },
    'PeripheralType': { 'name': 'PeripheralType' },
    'PhoneModel': { 'name': 'PhoneModel' },
    'Change_Supplier': { 'name': 'Change_Supplier' },
    'PhonePowerSupply': { 'name': 'PhonePowerSupply' },
    'PhoneType': { 'name': 'PhoneType' },
    'PlanningRecall': { 'name': 'PlanningRecall' },
    'PrinterModel': { 'name': 'PrinterModel' },
    'PrinterType': { 'name': 'PrinterType' },
    'Problem': { 'name': 'Problem' },
    'Problem_Supplier': { 'name': 'Problem_Supplier' },
    'Problem_Ticket': { 'name': 'Problem_Ticket' },
    'Problem_User': { 'name': 'Problem_User' },
    'ProblemCost': { 'name': 'ProblemCost' },
    'Change_Ticket': { 'name': 'Change_Ticket' },
    'ProblemTask': { 'name': 'ProblemTask' },
    'Profile_Reminder': { 'name': 'Profile_Reminder' },
    'Profile_RSSFeed': { 'name': 'Profile_RSSFeed' },
    'Profile_User': { 'name': 'Profile_User' },
    'ProfileRight': { 'name': 'ProfileRight' },
    'ProjectCost': { 'name': 'ProjectCost' },
    'ProjectState': { 'name': 'ProjectState' },
    'ProjectTask': { 'name': 'ProjectTask' },
    'ProjectTask_Ticket': { 'name': 'ProjectTask_Ticket' },
    'ProjectTaskTeam': { 'name': 'ProjectTaskTeam' },
    'Change_User': { 'name': 'Change_User' },
    'ProjectTaskType': { 'name': 'ProjectTaskType' },
    'ProjectTeam': { 'name': 'ProjectTeam' },
    'ProjectType': { 'name': 'ProjectType' },
    'RegisteredID': { 'name': 'RegisteredID' },
    'Reminder_User': { 'name': 'Reminder_User' },
    'RequestType': { 'name': 'RequestType' },
    'Reservation': { 'name': 'Reservation' },
    'ReservationItem': { 'name': 'ReservationItem' },
    'RSSFeed_User': { 'name': 'RSSFeed_User' },
    'RuleAction': { 'name': 'RuleAction' },
    'ChangeCost': { 'name': 'ChangeCost' },
    'RuleCriteria': { 'name': 'RuleCriteria' },
    'RuleDictionnaryComputerModel': { 'name': 'RuleDictionnaryComputerModel' },
    'RuleDictionnaryComputerModelCollection': { 'name': 'RuleDictionnaryComputerModelCollection' },
    'RuleDictionnaryComputerType': { 'name': 'RuleDictionnaryComputerType' },
    'RuleDictionnaryComputerTypeCollection': { 'name': 'RuleDictionnaryComputerTypeCollection' },
    'RuleDictionnaryDropdown': { 'name': 'RuleDictionnaryDropdown' },
    'RuleDictionnaryDropdownCollection': { 'name': 'RuleDictionnaryDropdownCollection' },
    'RuleDictionnaryManufacturer': { 'name': 'RuleDictionnaryManufacturer' },
    'RuleDictionnaryManufacturerCollection': { 'name': 'RuleDictionnaryManufacturerCollection' },
    'RuleDictionnaryMonitorModel': { 'name': 'RuleDictionnaryMonitorModel' },
    'BlacklistedMailContent': { 'name': 'BlacklistedMailContent' },
    'ChangeTask': { 'name': 'ChangeTask' },
    'RuleDictionnaryMonitorModelCollection': { 'name': 'RuleDictionnaryMonitorModelCollection' },
    'RuleDictionnaryMonitorType': { 'name': 'RuleDictionnaryMonitorType' },
    'RuleDictionnaryMonitorTypeCollection': { 'name': 'RuleDictionnaryMonitorTypeCollection' },
    'RuleDictionnaryNetworkEquipmentModel': { 'name': 'RuleDictionnaryNetworkEquipmentModel' },
    'RuleDictionnaryNetworkEquipmentModelCollection': { 'name': 'RuleDictionnaryNetworkEquipmentModelCollection' },
    'RuleDictionnaryNetworkEquipmentType': { 'name': 'RuleDictionnaryNetworkEquipmentType' },
    'RuleDictionnaryNetworkEquipmentTypeCollection': { 'name': 'RuleDictionnaryNetworkEquipmentTypeCollection' },
    'RuleDictionnaryOperatingSystem': { 'name': 'RuleDictionnaryOperatingSystem' },
    'RuleDictionnaryOperatingSystemCollection': { 'name': 'RuleDictionnaryOperatingSystemCollection' },
    'RuleDictionnaryOperatingSystemServicePack': { 'name': 'RuleDictionnaryOperatingSystemServicePack' },
    'ChangeValidation': { 'name': 'ChangeValidation' },
    'RuleDictionnaryOperatingSystemServicePackCollection': { 'name': 'RuleDictionnaryOperatingSystemServicePackCollection' },
    'RuleDictionnaryOperatingSystemVersion': { 'name': 'RuleDictionnaryOperatingSystemVersion' },
    'RuleDictionnaryOperatingSystemVersionCollection': { 'name': 'RuleDictionnaryOperatingSystemVersionCollection' },
    'RuleDictionnaryPeripheralModel': { 'name': 'RuleDictionnaryPeripheralModel' },
    'RuleDictionnaryPeripheralModelCollection': { 'name': 'RuleDictionnaryPeripheralModelCollection' },
    'RuleDictionnaryPeripheralType': { 'name': 'RuleDictionnaryPeripheralType' },
    'RuleDictionnaryPeripheralTypeCollection': { 'name': 'RuleDictionnaryPeripheralTypeCollection' },
    'RuleDictionnaryPhoneModel': { 'name': 'RuleDictionnaryPhoneModel' },
    'RuleDictionnaryPhoneModelCollection': { 'name': 'RuleDictionnaryPhoneModelCollection' },
    'RuleDictionnaryPhoneType': { 'name': 'RuleDictionnaryPhoneType' },
    'CommonDBChild': { 'name': 'CommonDBChild' },
    'RuleDictionnaryPhoneTypeCollection': { 'name': 'RuleDictionnaryPhoneTypeCollection' },
    'RuleDictionnaryPrinter': { 'name': 'RuleDictionnaryPrinter' },
    'RuleDictionnaryPrinterCollection': { 'name': 'RuleDictionnaryPrinterCollection' },
    'RuleDictionnaryPrinterModel': { 'name': 'RuleDictionnaryPrinterModel' },
    'RuleDictionnaryPrinterModelCollection': { 'name': 'RuleDictionnaryPrinterModelCollection' },
    'RuleDictionnaryPrinterType': { 'name': 'RuleDictionnaryPrinterType' },
    'RuleDictionnaryPrinterTypeCollection': { 'name': 'RuleDictionnaryPrinterTypeCollection' },
    'RuleDictionnarySoftware': { 'name': 'RuleDictionnarySoftware' },
    'RuleDictionnarySoftwareCollection': { 'name': 'RuleDictionnarySoftwareCollection' },
    'RuleImportComputer': { 'name': 'RuleImportComputer' },
    'CommonDBRelation': { 'name': 'CommonDBRelation' },
    'RuleImportComputerCollection': { 'name': 'RuleImportComputerCollection' },
    'RuleImportEntity': { 'name': 'RuleImportEntity' },
    'RuleImportEntityCollection': { 'name': 'RuleImportEntityCollection' },
    'RuleMailCollector': { 'name': 'RuleMailCollector' },
    'RuleMailCollectorCollection': { 'name': 'RuleMailCollectorCollection' },
    'RuleRight': { 'name': 'RuleRight' },
    'RuleRightCollection': { 'name': 'RuleRightCollection' },
    'RuleRightParameter': { 'name': 'RuleRightParameter' },
    'RuleSoftwareCategory': { 'name': 'RuleSoftwareCategory' },
    'RuleSoftwareCategoryCollection': { 'name': 'RuleSoftwareCategoryCollection' },
    'CommonDevice': { 'name': 'CommonDevice' },
    'RuleTicket': { 'name': 'RuleTicket' },
    'RuleTicketCollection': { 'name': 'RuleTicketCollection' },
    'SlaLevel': { 'name': 'SlaLevel' },
    'SlaLevelAction': { 'name': 'SlaLevelAction' },
    'SlaLevelCriteria': { 'name': 'SlaLevelCriteria' },
    'SoftwareCategory': { 'name': 'SoftwareCategory' },
    'SoftwareLicenseType': { 'name': 'SoftwareLicenseType' },
    'SoftwareVersion': { 'name': 'SoftwareVersion' },
    'SolutionTemplate': { 'name': 'SolutionTemplate' },
    'SolutionType': { 'name': 'SolutionType' },
    'CommonImplicitTreeDropdown': { 'name': 'CommonImplicitTreeDropdown' },
    'SsoVariable': { 'name': 'SsoVariable' },
    'State': { 'name': 'State' },
    'Supplier_Ticket': { 'name': 'Supplier_Ticket' },
    'SupplierType': { 'name': 'SupplierType' },
    'TaskCategory': { 'name': 'TaskCategory' },
    'Ticket': { 'name': 'Ticket' },
    'Ticket_Ticket': { 'name': 'Ticket_Ticket' },
    'Ticket_User': { 'name': 'Ticket_User' },
    'TicketCost': { 'name': 'TicketCost' },
    'TicketRecurrent': { 'name': 'TicketRecurrent' },
    'CommonITILActor': { 'name': 'CommonITILActor' },
    'TicketTask': { 'name': 'TicketTask' },
    'TicketTemplate': { 'name': 'TicketTemplate' },
    'TicketTemplateHiddenField': { 'name': 'TicketTemplateHiddenField' },
    'TicketTemplateMandatoryField': { 'name': 'TicketTemplateMandatoryField' },
    'TicketTemplatePredefinedField': { 'name': 'TicketTemplatePredefinedField' },
    'TicketValidation': { 'name': 'TicketValidation' },
    'UserCategory': { 'name': 'UserCategory' },
    'UserEmail': { 'name': 'UserEmail' },
    'UserTitle': { 'name': 'UserTitle' },
    'VirtualMachineState': { 'name': 'VirtualMachineState' },
    'CommonITILCost': { 'name': 'CommonITILCost' },
    'VirtualMachineSystem': { 'name': 'VirtualMachineSystem' },
    'VirtualMachineType': { 'name': 'VirtualMachineType' },
    'Vlan': { 'name': 'Vlan' },
    'WifiNetwork': { 'name': 'WifiNetwork' },
    'CommonITILValidation': { 'name': 'CommonITILValidation' },
    'CommonTreeDropdown': { 'name': 'CommonTreeDropdown' },
    'Bookmark_User': { 'name': 'Bookmark_User' },
    'Computer_Item': { 'name': 'Computer_Item' },
    'Computer_SoftwareLicense': { 'name': 'Computer_SoftwareLicense' },
    'Computer_SoftwareVersion': { 'name': 'Computer_SoftwareVersion' },
    'ComputerDisk': { 'name': 'ComputerDisk' },
    'ComputerModel': { 'name': 'ComputerModel' },
    'ComputerType': { 'name': 'ComputerType' },
    'ComputerVirtualMachine': { 'name': 'ComputerVirtualMachine' },
    'Consumable': { 'name': 'Consumable' },
    'ConsumableItemType': { 'name': 'ConsumableItemType' },
    'Contact_Supplier': { 'name': 'Contact_Supplier' },
    'Budget': { 'name': 'Budget' },
    'ContactType': { 'name': 'ContactType' },
    'Contract_Item': { 'name': 'Contract_Item' },
    'Contract_Supplier': { 'name': 'Contract_Supplier' },
    'ContractCost': { 'name': 'ContractCost' },
    'ContractType': { 'name': 'ContractType' },
    'DeviceCase': { 'name': 'DeviceCase' },
    'DeviceCaseType': { 'name': 'DeviceCaseType' },
    'DeviceControl': { 'name': 'DeviceControl' },
    'DeviceDrive': { 'name': 'DeviceDrive' },
    'DeviceGraphicCard': { 'name': 'DeviceGraphicCard' },
    'Calendar': { 'name': 'Calendar' },
    'DeviceHardDrive': { 'name': 'DeviceHardDrive' },
    'DeviceMemory': { 'name': 'DeviceMemory' },
    'DeviceMemoryType': { 'name': 'DeviceMemoryType' },
    'DeviceMotherboard': { 'name': 'DeviceMotherboard' },
    'DeviceNetworkCard': { 'name': 'DeviceNetworkCard' },
    'DevicePci': { 'name': 'DevicePci' },
    'DevicePowerSupply': { 'name': 'DevicePowerSupply' },
    'DeviceProcessor': { 'name': 'DeviceProcessor' },
    'DeviceSoundCard': { 'name': 'DeviceSoundCard' },
    'Document_Item': { 'name': 'Document_Item' },
    'Calendar_Holiday': { 'name': 'Calendar_Holiday' },
    'DocumentCategory': { 'name': 'DocumentCategory' },
    'DocumentType': { 'name': 'DocumentType' },
    'Domain': { 'name': 'Domain' },
    'DropdownTranslation': { 'name': 'DropdownTranslation' },
    'Entity': { 'name': 'Entity' },
    'Entity_KnowbaseItem': { 'name': 'Entity_KnowbaseItem' },
    'Entity_Reminder': { 'name': 'Entity_Reminder' },
    'Entity_RSSFeed': { 'name': 'Entity_RSSFeed' },
    'Fieldblacklist': { 'name': 'Fieldblacklist' },
    'FieldUnicity': { 'name': 'FieldUnicity' },
    'CalendarSegment': { 'name': 'CalendarSegment' },
    'Filesystem': { 'name': 'Filesystem' },
    'FQDN': { 'name': 'FQDN' },
    'FQDNLabel': { 'name': 'FQDNLabel' },
    'Group': { 'name': 'Group' },
    'Group_KnowbaseItem': { 'name': 'Group_KnowbaseItem' },
    'Group_Problem': { 'name': 'Group_Problem' },
    'Group_Reminder': { 'name': 'Group_Reminder' },
    'Group_RSSFeed': { 'name': 'Group_RSSFeed' },
    'Group_Ticket': { 'name': 'Group_Ticket' },
    'Group_User': { 'name': 'Group_User' },
    'Cartridge': { 'name': 'Cartridge' },
    'Holiday': { 'name': 'Holiday' },
    'Infocom': { 'name': 'Infocom' },
    'InterfaceType': { 'name': 'InterfaceType' },
    'IPAddress': { 'name': 'IPAddress' },
    'IPAddress_IPNetwork': { 'name': 'IPAddress_IPNetwork' },
    'IPNetmask': { 'name': 'IPNetmask' },
    'IPNetwork': { 'name': 'IPNetwork' },
    'IPNetwork_Vlan': { 'name': 'IPNetwork_Vlan' },
    'Item_DeviceCase': { 'name': 'Item_DeviceCase' },
    'Item_DeviceControl': { 'name': 'Item_DeviceControl' },
    'CartridgeItem_PrinterModel': { 'name': 'CartridgeItem_PrinterModel' },
    'Item_DeviceDrive': { 'name': 'Item_DeviceDrive' },
    'Item_DeviceGraphicCard': { 'name': 'Item_DeviceGraphicCard' },
    'Item_DeviceHardDrive': { 'name': 'Item_DeviceHardDrive' },
    'Item_DeviceMemory': { 'name': 'Item_DeviceMemory' },
    'Item_DeviceMotherboard': { 'name': 'Item_DeviceMotherboard' },
    'Item_DeviceNetworkCard': { 'name': 'Item_DeviceNetworkCard' },
    'Item_DevicePci': { 'name': 'Item_DevicePci' },
    'Item_DevicePowerSupply': { 'name': 'Item_DevicePowerSupply' },
    'Item_DeviceProcessor': { 'name': 'Item_DeviceProcessor' },
    'Item_Devices': { 'name': 'Item_Devices' }
}
