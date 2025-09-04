#!/bin/bash

# Script to check for direct tamagui imports of form components outside of allowed directories
# This script will fail if any file imports form components from 'tamagui' directly outside of:
# - src/config/
# - src/primitives/

echo "Checking for direct tamagui form component imports..."

# Find all files that import form components from tamagui, excluding config and primitives
# Form components that should use our primitives: Button, Input, TextArea, Label, Switch, Checkbox, Select, Card, Dialog, Sheet, Badge, Tooltip
# Check the import statement content, not the filename
TAMAGUI_IMPORTS=$(grep -r "from 'tamagui'" src/ | grep -v 'src/config/' | grep -v 'src/primitives/' | grep -E "import.*\b(Button|Input|TextArea|Label|Switch|Checkbox|Select|Card|Dialog|Sheet|Badge|Tooltip)\b.*from 'tamagui'")

if [ -n "$TAMAGUI_IMPORTS" ]; then
  echo "❌ Found direct tamagui form component imports outside of allowed directories:"
  echo "$TAMAGUI_IMPORTS"
  echo ""
  echo "Please replace these imports with primitives from '../primitives'"
  echo "Allowed form components: Button, Input, TextArea, Label, Switch, Checkbox, Select, Card, Dialog, Sheet, Badge, Tooltip"
  exit 1
else
  echo "✅ No direct tamagui form component imports found outside of allowed directories"
  echo "Note: Layout components (YStack, XStack, Text, etc.) are still allowed"
  exit 0
fi