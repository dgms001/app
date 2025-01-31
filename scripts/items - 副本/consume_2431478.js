var item = player.getInventorySlot(1, 1);
        item.setOption(1, 42656, true);
		item.setOption(2, 42656, true);
		item.setOption(3, 42656, true);
		item.setOption(1, 42656, false);
		item.setOption(2, 42656, false);
		item.setOption(3, 42656, false);
        player.updateItem(1, item);